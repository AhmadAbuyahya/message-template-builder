<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Repeater from './Repeater.vue'
// import inputClasses from '~/utils/inputClasses'

const { t } = useI18n()
const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)
watch(
  () => template.value.headerFormat,
  () => {
    template.value.headerImage = undefined
    template.value.headerText = ''
  },
)
const buttons = computed(() => [
  {
    label: t('none'),
    value: null,
    icon: '',
    selected: !template.value.showButtons,

    onClick: () => {
      template.value.showButtons = false
      template.value.buttons = []
    },
  },
  {
    label: t('call_to_action'),
    icon: 'i-carbon-circle-filled',
    value: 'TEXT',
    selected: template.value.showButtons,
    onClick: () => {
      template.value.showButtons = true

      if (template.value.buttons.length === 0) {
        template.value.buttons = [
          {
            type: 'URL',
            text: 'Offer Details',
            value: {
              url: 'google.com',
            },
          },
          {
            type: 'CALL',
            text: 'Call',
            value: {
              phone: '0787774817',
            },
          },
        ]
      }
    },
  },
] as const)
</script>

<template>
  <div>
    <div class="mb-4 text-black">
      <h1 class="text-lg">
        {{ t('template_buttons') }}
      </h1>
      <p class="mt-1 text-base text-#4a4a4a">
        {{ t('template_buttons_description') }}
      </p>
    </div>
    <div class="flex flex-col gap-4 rounded bg-white p-6">
      <div class="w-fit flex gap-4 rounded bg-#edf2f7 p-2">
        <button
          v-for="button in buttons"
          :key="button.label"
          class="btn" :class="{
            selected: button.selected,
          }"
          type="button"
          @click="button.onClick"
        >
          <div v-if="button.icon" :class="button.icon" />
          {{ button.label }}
        </button>
      </div>
      <Repeater />
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply flex  gap-4 items-center  py-2 px-8 rounded-md  transition-300 hover:bg-[#e4e5ef];
}

.selected {
  @apply bg-white hover:bg-white;
}

.text {
  @apply flex flex-col gap-1 text-left;
}

.title {
  @apply font-semibold text-lg;
}

.description {
  @apply text-#4a4a4a;
}
</style>
