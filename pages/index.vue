<template>
  Hello there
</template>

<script setup lang="ts">
// Redirect '/' to '/dashboard'
definePageMeta({
  middleware: 'index'
})
</script>