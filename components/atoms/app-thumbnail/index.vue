<script setup lang="ts">
import type { ThumbnailProps } from "./types";

const props = defineProps<ThumbnailProps>();

const src = computed<string>(
  () => `${props.thumbnail.path}.${props.thumbnail.extension}`
);
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
