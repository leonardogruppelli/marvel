<script setup lang="ts">
import type { IApiResponse } from "~/types/api";
import type { ICharacter } from "~/types/character";

useHead({
  title: "Marvel - Characters",
});

const { data: characters } = await useApi<IApiResponse<ICharacter[]>>(
  "/characters"
);
</script>

<template>
  <ul class="flex flex-col flex-wrap items-center sm:flex-row sm:items-stretch">
    <li
      v-for="character in characters?.data.results"
      class="w-full max-w-full px-3 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <app-card
        :to="{ name: 'characters-id', params: { id: character.id } }"
        :title="character.name"
        :description="character.description"
        :thumbnail="character.thumbnail"
      />
    </li>
  </ul>
</template>
