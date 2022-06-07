<template>
  <div>
    <input type="text">
    <input type="text">
    <button>Sign In</button>
    Don't have an account? Sign up instead
    <GsiButton/>
  </div>
</template>

<script setup lang="ts">
import GsiButton from '~~/components/gsiButton.vue'
const config = useRuntimeConfig()

function signIn(res){
  console.log(res.credential)
}
onBeforeMount(() => {
  // @ts-ignore
  window.google.accounts.id.initialize({
    // @ts-ignore
    client_id: config.VUE_APP_GSI_CLIENT_ID,
    // @ts-ignore
    callback: signIn,
  })
})

// definePageMeta({
//   layout: false
// })
useMeta({
  title: `${config.VUE_APP_NAME} - Welcome`,
  script: [{ src: 'https://accounts.google.com/gsi/client', async: true, defer: true}]
})
</script>
