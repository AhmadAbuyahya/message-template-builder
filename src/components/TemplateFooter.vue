<script setup lang="ts">
import { storeToRefs } from 'pinia'
import inputClasses from '~/utils/inputClasses'

const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="mb-4 text-black">
      <h1 class="text-lg">
        {{ t('inputs.footer') }}
      </h1>
      <p class="mt-1 text-base text-#4a4a4a">
        {{ t('template_footer_description') }}
      </p>
    </div>
    <div class="flex flex-col gap-8 bg-white p-6">
      <div>
        <FormKit
          v-model="template.footer"
          validation-visibility="submit"
          :classes="inputClasses" type="text" name="footer"
          :placeholder="t('inputs.footer')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
