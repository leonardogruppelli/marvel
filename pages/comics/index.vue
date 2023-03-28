<script setup lang="ts">
import type { ApiResponse } from "~/types/api";
import type { Comic } from "~/types/comic";

useHead({
  title: "Marvel - Comics",
});

const { data: comics } = await useApi<ApiResponse<Comic[]>>("/comics");
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="comic in comics?.data.results"
      :key="comic.id"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <app-card
        :description="comic.description"
        :id="comic.id"
        :prices="comic.prices"
        :thumbnail="comic.thumbnail"
        :title="comic.title"
        :to="{ name: 'comics-id', params: { id: comic.id } }"
      />
    </li>
  </ul>
</template>
