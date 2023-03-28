<script setup lang="ts">
import type { CardInterface } from "./types";

defineProps<CardInterface>();
</script>

<template>
  <div class="group flex flex-col gap-8">
    <div
      class="p-2 border-2 border-red-500 shadow-lg transition-all overflow-hidden group-hover:shadow-xl group-hover:translate-y-2"
    >
      <div class="pb-2/3 relative">
        <app-thumbnail
          :thumbnail="thumbnail"
          :alt="title"
          class="w-full h-full absolute inset-0 transition-transform group-hover:scale-110"
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <h3
        class="h-[calc(theme(spacing.7)*2)] text-lg font-bold text-fade transition-colors overflow-hidden after:h-7 group-hover:text-red-500"
      >
        {{ title }}
      </h3>

      <small
        class="h-[calc(theme(spacing.5)*3)] text-sm text-justify text-fade overflow-hidden after:h-5"
      >
        {{ description }}
      </small>
    </div>
  </div>
</template>
