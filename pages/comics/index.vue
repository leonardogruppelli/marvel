<script setup lang="ts">
import type { IApiResponse } from "~/types/api";
import type { IComic } from "~/types/comic";

useHead({
  title: "Marvel - Comics",
});

const { data: comics } = await useApi<IApiResponse<IComic[]>>("/comics");
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="comic in comics?.data.results"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <app-card
        :to="{ name: 'comics-id', params: { id: comic.id } }"
        :id="comic.id"
        :title="comic.title"
        :description="comic.description"
        :thumbnail="comic.thumbnail"
        :prices="comic.prices"
      />
    </li>
  </ul>
</template>
