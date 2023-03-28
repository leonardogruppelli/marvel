<script setup lang="ts">
import type { ThumbnailInterface } from "./types";

const props = defineProps<ThumbnailInterface>();

const src = computed<string>(
  () => `${props.thumbnail.path}.${props.thumbnail.extension}`
);
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
