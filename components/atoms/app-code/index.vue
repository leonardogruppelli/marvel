<script setup lang="ts">
const hovering = ref<boolean>(false);
const copied = ref<boolean>(false);

const slots = useSlots();

function mouseenter(): void {
  hovering.value = true;
}

function mouseleave(): void {
  hovering.value = false;
}

function text(): string {
  let value: string = "";

  slots.default?.().forEach((item) => {
    value += item.children ? `${item.children} ` : "";
  });

  return value;
}

async function copy(): Promise<void> {
  if (copied.value) return;

  await navigator.clipboard.writeText(text());

  copied.value = true;
}
</script>

<template>
  <code
    class="inline-flex flex-col px-6 py-4 relative bg-gray-100 rounded-md text-red-500"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <slot />

    <button
      v-if="hovering"
      class="p-2 absolute top-2 right-2 bg-gray-200 rounded-md text-lg text-gray-100"
      @click="copy"
    >
      <ion-checkmark-outline v-if="copied" class="text-green-500" />
      <ion-copy-outline v-else class="text-blue-500" />
    </button>
  </code>
</template>
