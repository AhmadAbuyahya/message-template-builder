<script setup lang="ts">
const templateStore = useTemplateStore()
const { onSubmit } = templateStore
</script>

<template>
  <header class="flex justify-between bg-white p-4">
    <div class="flex items-center gap-1 text-black">
      <div i-carbon-add-large inline-block />
      <h1>
        New Template Message
      </h1>
    </div>
    <button
      class="flex items-center gap-1 rounded bg-[#9b7cb7] p-2 text-white"
      @click="onSubmit"
    >
      <div class="i-carbon-save inline-block" />
      Save
    </button>
  </header>
</template>

<style scoped>

</style>
