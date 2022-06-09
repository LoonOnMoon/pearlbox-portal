<template>
  <v-app>
    <v-card class="mx-auto pa-10 mt-10">
      <div class="pb-input-window">
        <v-expand-transition>
          <div v-show="isSignIn">
            <sign-in-dialog/>
          </div>
        </v-expand-transition>
        
        <v-expand-transition>
          <div v-show="!isSignIn">
            <sign-up-dialog/>
          </div>
        </v-expand-transition>
        
        <v-divider class="my-4"/>
        <h5 class="mx-auto my-2" v-show="!isSignIn">Already have a PearlBox account? <a @click="toggleSignIn">Sign in</a> instead</h5>
        <h5 class="mx-auto my-2" v-show="isSignIn">Don't have a PearlBox account? <a @click="toggleSignIn">Sign up</a> instead</h5>

        <v-divider class="my-4"/>
        <h5 class="mx-auto my-2">Sign in using third party services</h5>
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

const isSignIn = ref(true)

function toggleSignIn(){
  isSignIn.value = !isSignIn.value
}

definePageMeta({
  layout: false,
})
useMeta({
  title: `${config.VUE_APP_NAME} - Sign in`,
  script: [{ src: 'https://accounts.google.com/gsi/client', async: true, defer: true}]
})

</script>

<style scoped lang="scss">
  @import '~/assets/sass/main.scss';
  h2, h3, h5, h4{
    text-align: center;
  }
  .pb-input-window{
    width: 22rem;
  }
  iframe body{
    background-color: $dark-primary;
  }
  a{
    color: $dark-primary;
  }
</style>