<script setup lang="ts">
import type { ApiResponse } from "~/types/api";
import type { Character } from "~/types/character";

const route = useRoute();

const { data } = await useApi<ApiResponse<Character[]>>(
  `/characters/${route.params.id}`
);

const character = computed(() => data.value?.data.results[0]!);
</script>

<template>
  <div class="py-6">
    <div class="clear-both">
      <div class="w-2/5 float-left p-2 mr-10 border-2 border-red-500 shadow-xl">
        <div class="pb-2/3 relative">
          <app-thumbnail
            :alt="character.name"
            :thumbnail="character.thumbnail"
            class="w-full h-full absolute inset-0"
          />
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h1 class="text-4xl text-red-500">{{ character.name }}</h1>
        <p class="text-xl text-justify">{{ character.description }}</p>
      </div>
    </div>
  </div>
</template>
