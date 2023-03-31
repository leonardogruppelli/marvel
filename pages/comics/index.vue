<script setup lang="ts">
import type { IApiResponse } from "~/types/api";
import type { IComic } from "~/types/comic";

useHead({
  title: "Marvel - Comics",
});

const { data: comics } = await useFetch<IApiResponse<IComic[]>>(
  "https://gateway.marvel.com/v1/public/comics",
  {
    query: {
      apikey: "004423c7c59e69f3f3fbde8abbbc78be",
    },
  }
);

console.log(comics.value?.data.results);
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="comic in comics?.data.results"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      {{ comic.title }}
      <app-card />
    </li>
  </ul>
</template>
