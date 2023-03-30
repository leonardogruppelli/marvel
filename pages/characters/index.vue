<script setup lang="ts">
useHead({
  title: "Marvel - Characters",
});
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="character in []"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <app-card />
    </li>
  </ul>
</template>
