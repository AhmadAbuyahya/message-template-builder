<script setup lang="ts">
const { t } = useI18n()
const templateStore = useTemplateStore()
const { onSubmit } = templateStore

function handleSubmit() {
  onSubmit()
}
</script>

<template>
  <div class="p-4">
    <FormKit
      type="form" :submit-attrs="{
        inputClass: 'bg-#9b7cb7 rounded-md p-2 text-white  transition-300 mt-8  w-100px',
      }" :submit-label="t('form_submit')" :classes="{
        message: 'hidden',
      }" validation-visibility="submit"
      @submit="handleSubmit"
    >
      <div class="gap:8 flex flex-col md:gap-16">
        <TemplateDetails />
        <TemplateCategory />
        <TemplateHeader />
        <TemplateBody />
        <TemplateFooter />
        <TemplateButtons />
      </div>
    </FormKit>
  </div>
</template>

<style scoped>

</style>
