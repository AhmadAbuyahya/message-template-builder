<script setup lang="ts">
import { storeToRefs } from 'pinia'
import inputClasses from '~/utils/inputClasses'

const { t } = useI18n()
const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)
</script>

<template>
  <div>
    <div class="mb-4 text-black">
      <h1 class="text-lg">
        {{ t('inputs.body') }}
      </h1>
      <p class="mt-1 text-base text-#4a4a4a">
        {{ t('template_body_description') }}
      </p>
    </div>
    <div class="flex flex-col gap-8 bg-white p-6">
      <div>
        <FormKit
          v-model="template.body"
          validation-visibility="submit"
          :classes="{
            ...inputClasses,
            input: 'w-full  px-4 py-2 border-stone border-1 bg-white rounded-md placeholder-stone',
          }" type="textarea" name="body"
          validation="required:trim" :placeholder="t('inputs.body')"
          :rows="5"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
