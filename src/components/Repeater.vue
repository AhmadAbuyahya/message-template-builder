<script setup lang="ts">
import { storeToRefs } from 'pinia'
import inputClasses from '~/utils/inputClasses'

const templateStore = useTemplateStore()
const { template } = storeToRefs(templateStore)
const { addButton, removeButton } = templateStore
</script>

<template>
  <div>
    <div v-for="(item, index) in template.buttons" :key="index" class="mb-4 flex items-center gap-4">
      <div class="grid grid-cols-3 w-full gap-4 border-1 border-stone rounded bg-#f7fafc p-4">
        <FormKit
          v-model="item.type"
          type="select"
          :options="[{
            value: 'URL',
            label: 'Visit Website',
          }, {
            value: 'CALL',
            label: 'Phone Number',
          }]"
          placeholder="Button Type"
          class="input"
          label="Button Type"
          :classes="inputClasses"
        />
        <FormKit
          v-model="item.text"
          type="text"
          :classes="inputClasses"
          label="Button Text"
          placeholder="Text"
          class="input"
        />
        <FormKit
          v-if="item.type === 'URL'"
          v-model="item.value.url"
          :classes="inputClasses"
          tokenize="false"
          type="text"
          placeholder="Website URL"
          label="Website URL"
          class="input"
        />
        <FormKit
          v-if="item.type === 'CALL'"
          v-model="item.value.phone"
          :classes="inputClasses"
          type="text"
          label="Phone Number"
          placeholder="Phone Number"
          class="input"
        />
      </div>
      <button class="btn p-4" type="button" @click="removeButton(index)">
        <div
          class="i-carbon-trash-can"
        />
      </button>
    </div>
    <button v-if="template.showButtons" type="button" class="border-1 border-stone rounded bg-#edf2f7 p-2" @click="addButton">
      Add Button
    </button>
  </div>
</template>

<style scoped>

</style>
