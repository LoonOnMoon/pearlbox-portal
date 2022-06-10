import { useUserStore } from '~~/store/user'

const dashboard = '/dashboard'
export default defineNuxtRouteMiddleware((to) => {
  if(to.path == '/')
    return navigateTo(dashboard)
  return undefined
})