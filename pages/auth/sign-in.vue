<template>
  <v-app>
    <v-card class="mx-auto pa-10">
      <div>
        <h5 class="mx-auto my-2">Sign in</h5>
        <v-text-field label="Email" variant="outlined"/>
        <v-text-field label="Password" variant="outlined"/>
        <v-btn color="secondary ma-2">Sign in</v-btn>
      </div>
      <v-divider/>
      <div>
        <h5 class="mx-auto my-2">Don't have a PearlBox account? Sign up instead</h5>
        <gsiButton class="mx-auto"/>
      </div>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
const { $auth } = useNuxtApp()
const config = useRuntimeConfig()

function signIn(res){
  $auth.signInGoogle(res.credential)
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

definePageMeta({
  layout: false,
})
useMeta({
  title: `${config.VUE_APP_NAME} - Sign in`,
  script: [{ src: 'https://accounts.google.com/gsi/client', async: true, defer: true}]
})
</script>

<style scoped>
  h3, h5{
    text-align: center;
  }
</style>