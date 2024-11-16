<script setup lang="ts">
import { storeToRefs } from 'pinia'

const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)
const imagePreview = ref('')

function getBase64(file: File | undefined) {
  if (!file)
    return Promise.resolve('')
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

watch(
  () => template.value.headerFormat,
  () => {
    imagePreview.value = ''
  },
)
watch(
  () => template.value.headerImage,
  async (value) => {
    if (value === null) {
      imagePreview.value = ''
    }

    if (template.value.headerFormat === 'TEXT')
      return ''
    // @ts-expect-error ???
    imagePreview.value = await getBase64(template.value.headerImage?.[0]?.file)
  },
)
</script>

<template>
  <div class="preview">
    <div class="message">
      <h1
        v-if="template.headerFormat === 'TEXT'"
        class="text-xl font-bold"
      >
        {{ template.headerText }}
      </h1>
      <img v-else :src="imagePreview" alt="">

      <p
        v-if="template.body"
        class="mt-4"
      >
        {{ template.body }}
      </p>

      <p
        v-if="template.footer"
        class="mt-4 flex justify-between text-sm text-#4a4a4a"
      >
        <span>
          {{ template.footer }}
        </span>
        <span>{{
          new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })
        }}</span>
      </p>
      <div>
        <div
          v-if="template.buttons.length"
          class="mt-4 flex flex-col text-center text-blue"
        >
          <a
            v-for="button in template.buttons"
            :key="button.text"
            :href="button.value.url || `tel:${button.value.phone}`"
            class="w-full flex items-center justify-center gap-2 border-t-1 border-#e2e8f0 p-2"
          >
            <div
              v-if="button.type === 'CALL'"
              class="i-carbon-phone inline-block"
            />
            <div
              v-else
              class="i-carbon-launch inline-block"
            />
            {{ button.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .preview {
  width: min(100%, 432px);
  min-height: 740px;
  background-image: url('/preview.svg');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.message {
  @apply min-h-100px p-4 bg-white absolute top-131px left-50px right-50px rounded-md rounded-tl-none;
}
</style>
