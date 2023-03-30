<script setup lang="ts">
useHead({
  title: "Marvel",
});
</script>

<template>
  <div class="max-w-3xl py-10 mx-auto">
    <ion-receipt-outline class="w-40 h-40 mb-8 text-red-500" />

    <h1 class="mb-6 text-5xl font-bold text-red-500 uppercase">
      Marvel Comics - Nuxt 3 and TypeScript Workshop
    </h1>

    <h5 class="mb-10 text-2xl">
      Welcome to the Nuxt 3 and TypeScript Workshop, here we will learn the
      basics of the powerful combination of using a great SSR Framework and a
      strongly typed programming language to build robust applications.
    </h5>

    <h2 class="mb-4 text-2xl font-bold">First step</h2>

    <p class="mb-8 text-xl">
      Our first step of the journey will be installing a very important
      dependency in our project, it will make importing external types and using
      them to type our macros possible. To install it, run the command below in
      your terminal:
    </p>

    <app-code>yarn add -D vite-plugin-vue-type-imports</app-code>
  </div>
</template>
