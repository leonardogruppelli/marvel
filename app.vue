<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "font-oswald",
  },
});
</script>

<template>
  <nuxt-loading-indicator color="red" :height="2" />

  <app-header />

  <main class="content">
    <nuxt-page />
  </main>
</template>
