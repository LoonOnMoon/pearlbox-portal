import { useUserStore } from '~~/store/user'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      'auth': {
        signInGoogle: async (jwt: string) => {
          var pearlBoxJwt = await useFetch('http://icanhazip.com')
          console.log(pearlBoxJwt.data.value)
        
          const userStore = useUserStore()
          userStore.setJwt(jwt)
        
          //localStorage.setItem('pearlBoxJwt', jwt)
          //const router = useRouter()
          //router.push('/')
          navigateTo('/')
        },
      }
    }
  }
})
