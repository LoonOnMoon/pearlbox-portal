import { defineStore } from 'pinia'
// import {watch} from 'vue';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      jwt: useNuxtApp().$cookies.get('jwt')
    }
  },
  actions: {
    setJwt(jwt: string) {
      this.jwt = jwt
      useNuxtApp().$cookies.set('jwt', this.jwt, {
        path: '/',
        maxAge: 60 * 60 * 24 * 300,
      })
    },
  },
  getters: {
    //getPearlBoxJwt: state => state.pearlBoxJwt,
  },
})