import { acceptHMRUpdate, defineStore } from 'pinia'
import initialState from './initialState'

export const useTemplateStore = defineStore('template', () => {
  const template = ref(initialState)
  const addButton = () => {
    template.value.buttons.push({
      text: '',
      type: 'URL',
      value: {
        url: '',
      },
    })
  }
  const removeButton = (index: number) => {
    template.value.buttons.splice(index, 1)
  }

  const finalData = computed(() => {
    return {
      language: template.value.language,
      name: template.value.name,
      category: template.value.category,
      components: [
        // Header component
        ...(template.value.headerFormat
          ? [{
              type: 'HEADER',
              format: template.value.headerFormat,
              value: template.value.headerImage?.[0]
                ? { url: template.value.headerImage[0].name }
                : { text: template.value.headerText },
            }]
          : []),
        {
          type: 'BODY',
          text: template.value.body,
        },
        ...(template.value.footer
          ? [{
              type: 'FOOTER',
              text: template.value.footer,
            }]
          : []),
        ...(template.value.showButtons
          ? [{
              type: 'BUTTONS',
              buttons: template.value.buttons.map(button => ({
                type: button.type,
                text: button.text,
                value: button.type === 'URL'
                  ? { url: button.value.url }
                  : { phone_number: button.value.phone },
              })),
            }]
          : []),
      ],
    }
  })
  const onSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(finalData.value, null, 2))
  }
  return { template, addButton, removeButton, finalData, onSubmit }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTemplateStore as any, import.meta.hot))
