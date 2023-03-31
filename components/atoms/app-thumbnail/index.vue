<script setup lang="ts">
import type { IThumbnailProps } from "./types";

const props = defineProps<IThumbnailProps>();

const src = computed<string>(
  () => `${props.thumbnail.path}.${props.thumbnail.extension}`
);
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
