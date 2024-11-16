<script setup lang="ts">
import { storeToRefs } from 'pinia'
import inputClasses from '~/utils/inputClasses'

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

const buttons = [
  {
    label: t('none'),
    value: null,
    icon: '',
  },
  {
    label: t('text'),
    icon: 'i-carbon-text-long-paragraph',
    value: 'TEXT',
  },
  {
    label: t('image'),
    icon: 'i-carbon-image',
    value: 'IMAGE',
  },
] as const

const imageClasses = {
  ...inputClasses,
  fileRemove: 'bg-red color-white px-2 rounded-md mt-1',
  fileName: 'hidden',
  noFiles: 'hidden',
}
</script>

<template>
  <div>
    <div class="mb-4 text-black">
      <h1 class="text-lg">
        {{ t('template_header') }}
      </h1>
      <p class="mt-1 text-base text-[#4a4a4a]">
        {{ t('template_header_description') }}
      </p>
    </div>
    <div class="flex flex-col gap-4 rounded bg-white p-6">
      <div class="w-fit flex gap-4 rounded bg-[#edf2f7] p-2">
        <button
          v-for="button in buttons"
          :key="button.label"
          class="btn"
          type="button"
          :class="{
            selected: template.headerFormat === button.value,
          }"
          @click="template.headerFormat = button.value"
        >
          <div v-if="button.icon" :class="button.icon" />
          {{ button.label }}
        </button>
      </div>

      <!-- Text Input FormKit -->
      <FormKit
        v-if="template.headerFormat === 'TEXT'"
        v-model="template.headerText"
        type="text"
        name="headerText"
        :label="t('text')"
        validation="required:trim"
        :classes="inputClasses"
        validation-visibility="submit"
      />

      <!-- Image Input FormKit -->
      <FormKit
        v-if="template.headerFormat === 'IMAGE'"
        v-model="template.headerImage"
        type="file"
        name="headerImage"
        :label="t('image')"
        validation="required"
        :multiple="false"
        accept="png,jpeg,jpg"
        :classes="imageClasses"
        validation-visibility="submit"
      />
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply flex gap-4 items-center py-2 px-8 rounded-md transition-300 hover:bg-[#e4e5ef];
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
  @apply text-[#4a4a4a];
}
</style>
