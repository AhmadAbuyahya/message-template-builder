import type { Button, Category } from './types'

export default {
  language: '',
  name: '',
  category: 'MARKETING' as Category,
  headerFormat: null as null | 'TEXT' | 'IMAGE',
  headerText: '',
  headerImage: undefined as FileList | undefined,
  body: '',
  footer: '',
  showButtons: false,
  buttons: [] as Button[],
}
