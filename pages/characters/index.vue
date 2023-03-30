<script setup lang="ts">
import type { ApiResponse } from "~/types/api";
import type { Character } from "~/types/character";

useHead({
  title: "Marvel - Characters",
});

const limit: number = 100;

const { data: characters } = await useApi<ApiResponse<Character[]>>(
  "/characters",
  {
    query: {
      limit,
    },
  }
);
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="character in characters?.data.results"
      :key="character.id"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <app-card
        :description="character.description"
        :id="character.id"
        :thumbnail="character.thumbnail"
        :title="character.name"
        :to="{ name: 'characters-id', params: { id: character.id } }"
      />
    </li>
  </ul>
</template>
