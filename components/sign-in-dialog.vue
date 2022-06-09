<template>
  <h4 class="mx-auto my-2">Sign in</h4>
  <v-text-field class="my-3" label="E-mail" variant="outlined" type="email" color="primary" hide-details="auto"/>
  <v-text-field class="my-3" label="Password" variant="outlined" type="password" color="primary" hide-details="auto"/>
  <v-row justify="end" align="center">
    <v-col cols="6">
      <v-checkbox v-model="rememberMeSignIn" label="Remember me" color="primary" value="Remember me" hide-details/>
    </v-col>
    <v-col cols="6">
      <v-btn append-icon="mdi-check" variant="outlined" color="primary" class="float-right">Sign in</v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const rememberMeSignIn = ref(false)
</script>

<style scoped>
  h3, h5, h4{
    text-align: center;
  }
  .pb-input-window{
    width: 22rem;
  }
</style>