<script setup lang="ts">
interface IBreadcrumbItem {
  label: string
  href?: '/'
}
defineProps<{
  items: IBreadcrumbItem[]
}>()
</script>

<template>
  <div class="flex gap-2 p-4">
    <div
      v-for="(item, index) in items"
      :key="item.label"
      class="flex items-center gap-1"
    >
      <RouterLink
        :to="item.href ?? ''"
        :class="{
          'text-gray-500': index !== items.length - 1,
          'text-gray-900': index === items.length - 1,
        }"
      >
        {{ item.label }}
      </RouterLink>
      <div
        v-if="index !== items.length - 1" i-carbon-chevron-right

        inline-block
        :class="{
          'text-gray-500': index !== items.length - 1,
          'text-gray-900': index === items.length - 1,
        }"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
