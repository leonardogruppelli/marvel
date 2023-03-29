<script setup lang="ts">
import { ButtonProps } from "./types";

const props = defineProps<ButtonProps>();

const attrs = useAttrs();

const element = computed<string>(() => (attrs.onClick ? "button" : "div"));
</script>

<template>
  <component
    :is="element"
    :class="[
      'inline-block px-4 py-2 relative bg-gray-900 text-gray-100 font-bold uppercase -skew-x-12',
      'after:w-[calc(100%-theme(spacing.2))] after:h-[calc(100%-theme(spacing.2))] after:absolute after:top-1/2 after:left-1/2 after:border after:border-red-500 after:-translate-x-1/2 after:-translate-y-1/2 after:pointer-events-none',
      (props.danger || props.info || props.success || props.warning) &&
        'after:!border-gray-100',
      props.danger && 'bg-red-500',
      props.info && 'bg-blue-500',
      props.success && 'bg-green-500',
      props.warning && 'bg-yellow-500',
      props.full && 'w-full',
    ]"
  >
    <div class="flex items-center justify-center gap-2 skew-x-12">
      <slot name="icon" />

      <slot />
    </div>
  </component>
</template>
