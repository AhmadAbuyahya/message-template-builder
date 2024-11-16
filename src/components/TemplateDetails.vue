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
        {{ t('template_details') }}
      </h1>
      <p class="mt-1 text-base text-[#4a4a4a]">
        {{ t('template_details_description') }}
      </p>
    </div>

    <div class="flex flex-col gap-8 bg-white p-6">
      <FormKit
        v-model="template.name"
        validation-visibility="submit"
        :classes="inputClasses"
        type="text"
        name="name"
        :label="t('inputs.name')"
        validation="required:trim"
        :placeholder="t('inputs.name')"
      />

      <FormKit
        v-model="template.language"
        validation-visibility="submit"
        :classes="inputClasses"
        type="select"
        name="language"
        :label="t('inputs.language')"
        validation="required:trim"
        placeholder="Select Language"
        :options="['en_US', 'ar_SA']"
      />
    </div>
  </div>
</template>
