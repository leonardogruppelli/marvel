<template>
  <span
    class="inline-block px-4 py-2 bg-red-500 text-gray-100 font-bold -skew-x-12 after:w-[calc(100%-theme(spacing.2))] after:h-[calc(100%-theme(spacing.2))] after:absolute after:top-1/2 after:left-1/2 after:border after:border-gray-100 after:-translate-x-1/2 after:-translate-y-1/2"
  >
    <p class="skew-x-12">
      <slot />
    </p>
  </span>
</template>
