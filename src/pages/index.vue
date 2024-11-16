<script setup lang="ts">
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()
</script>

<template>
  <Header />
  <Breadcrumb
    :items="[
      {
        label: t('breadcrumb.templates'),
        href: '/',
      },
      {
        label: t('breadcrumb.new_template'),
      },
    ]"
  />
  <main class="relative grid-cols-[1fr_432px] flex flex-col gap-4 px-4 md:grid">
    <Controls />

    <div class="sticky top-0 h-fit">
      <Preview />
    </div>
  </main>
</template>
