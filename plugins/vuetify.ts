import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#A5D6A7',
            secondary: '#E6EE9C', // #FFCDD2,
            "on-primary": "#C8E6C9"
          }
        },
        light: {
          dark: false,
          colors: {
            primary: '#E53935', // #E53935
            secondary: '#FFCDD2', // #FFCDD2
          }
        },
      },
      defaultTheme: "dark",
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
