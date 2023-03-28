<script setup lang="ts">
import type { BadgeProps } from "./types";

defineProps<BadgeProps>();
</script>

<template>
  <span
    class="min-w-[theme(spacing.5)] min-h-[theme(spacing.5)] flex items-center justify-center p-1 absolute -top-1 -right-1 bg-red-500 rounded-full text-sm leading-[0] text-gray-100"
  >
    {{ label }}
  </span>
</template>
