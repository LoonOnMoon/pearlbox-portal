import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //  To make it work for SSR, remember to set `ssr: true` and `target: 'server'`
  ssr: true,
  target: 'server',
  
	css: [
		'vuetify/lib/styles/main.sass',
		'mdi/css/materialdesignicons.min.css',
    '~/assets/sass/main.scss'
	],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
  publicRuntimeConfig: {
    VUE_APP_NAME: process.env.VUE_APP_NAME,
    VUE_APP_PEARLBOX_API_URL: process.env.VUE_APP_PEARLBOX_API_URL,
    VUE_APP_GSI_CLIENT_ID: process.env.VUE_APP_GSI_CLIENT_ID,
  },
  modules: [
    '@pinia/nuxt',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
  ],
  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    treeShake: true
  },
})
