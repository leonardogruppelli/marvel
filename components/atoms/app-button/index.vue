<script setup lang="ts">
import type { ButtonProps } from "./types";

defineProps<ButtonProps>();
</script>

<template>
  <button
    :class="[
      'inline-block px-4 py-2 relative bg-gray-900 text-gray-100 font-bold uppercase -skew-x-12',
      'after:w-[calc(100%-theme(spacing.2))] after:h-[calc(100%-theme(spacing.2))] after:absolute after:top-1/2 after:left-1/2 after:border after:border-red-500 after:-translate-x-1/2 after:-translate-y-1/2',
      inverse && 'bg-gray-100 text-red-500',
      large && 'px-6 py-4',
    ]"
  >
    <div class="flex items-center justify-center gap-2 skew-x-12">
      <slot name="icon" />

      <slot />
    </div>
  </button>
</template>
