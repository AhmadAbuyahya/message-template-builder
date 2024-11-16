export interface HeaderComponent {
  type: 'HEADER'
  format: 'TEXT' | 'IMAGE'
  value: {
    url?: string
    text?: string
  }
}
export interface BodyComponent {
  type: 'BODY'
  text: string
}
export interface FooterComponent {
  type: 'FOOTER'
  text: string
}

export interface Button {
  type: 'CALL' | 'URL'
  text: string
  value: {
    url?: string
    phone?: string
  }
}

export interface ButtonsComponent {
  type: 'BUTTONS'
  buttons: Button[]
}

export type Component = HeaderComponent | BodyComponent | FooterComponent | ButtonsComponent

export type Category = 'MARKETING' | 'UTILITY'
export interface MessageTemplate {
  name: string
  language: 'en_US' | 'ar_SA'
  category: Category
  components: Component[]
}
