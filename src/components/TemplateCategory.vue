<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)

const categories = [
  {
    id: 'MARKETING',
    icon: '/marketing.svg',
    titleKey: 'marketing',
    description: 'Send promotions and information about your products, services or business.',
  },
  {
    id: 'UTILITY',
    icon: '/utility.svg',
    titleKey: 'utility',
    description: 'Send messages about an existing order or account.',
  },
] as const

function isSelected(category: typeof categories[number]['id']) {
  return template.value.category === category
}
</script>

<template>
  <div>
    <!-- Header Section -->
    <header class="mb-4 text-black">
      <h1 class="text-lg">
        {{ t('template_category') }}
      </h1>
      <p class="mt-1 text-base text-[#4a4a4a]">
        {{ t('template_category_description') }}
      </p>
    </header>

    <!-- Category Selection -->
    <div class="flex flex-col gap-4 bg-white p-6">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="flex items-center gap-4 rounded-md bg-[#edf2f7] p-4 transition-all duration-300 hover:bg-[#e4e5ef]"
        :class="{
          selected: category.id === template.category,
        }"
        @click="template.category = category.id"
      >
        <img :src="category.icon" :alt="t(category.titleKey)">

        <div class="flex flex-col gap-1 text-left">
          <div class="text-lg font-semibold">
            {{ t(category.titleKey) }}
          </div>
          <div class="text-[#4a4a4a]">
            {{ category.description }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.selected {
  @apply bg-[#e4e5ef];
}
</style>
