import { useUserStore } from '~~/store/user'
interface gsiResponse{
  clientId: string,
  credential: string,
  select_by: string
}
export default defineNuxtPlugin(() => {
  return {
    provide: {
      'auth': {
        signInGoogle: async (res: gsiResponse) => {
          var pearlBoxJwt = await useFetch('http://icanhazip.com')
          console.log(pearlBoxJwt.data.value)
        
          const userStore = useUserStore()
          userStore.setJwt(res.credential)
          
          navigateTo('/')
        },
      }
    }
  }
})