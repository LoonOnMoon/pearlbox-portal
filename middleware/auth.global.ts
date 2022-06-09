import { useUserStore } from '~~/store/user'

const signin = '/auth/sign-in'
export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    var jwt = userStore.jwt
    
    if(!jwt && !to.path.includes(signin))
      return navigateTo(signin)
    else if(jwt && to.path.includes(signin))
      return navigateTo(from.path.includes(signin) ? '/' : from.path)
})
