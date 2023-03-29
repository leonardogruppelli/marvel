<script setup lang="ts">
import type { AlertProps, AlertEmits } from "./types";

defineProps<AlertProps>();

const emit = defineEmits<AlertEmits>();

function close() {
  emit("close");
}
</script>

<template>
  <div v-if="open" class="w-screen h-screen fixed top-0 left-0 z-10">
    <div class="w-full h-full bg-gray-800 bg-opacity-80" />

    <div class="w-[480px] max-w-[80%] p-2 centered bg-gray-100 shadow">
      <div class="flex flex-col items-center p-8 border-2 border-gray-800">
        <slot name="header">
          <h2 class="mb-6 text-3xl font-bold">Title</h2>
        </slot>

        <slot name="body">
          <h4 class="mb-8 text-xl text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quo architecto aliquam officia fuga voluptas nulla? Sed pariatur
            quam magni, est fuga mollitia? Veritatis rem expedita excepturi
            perferendis vel recusandae?
          </h4>
        </slot>

        <slot name="footer">
          <div class="w-full flex">
            <app-button class="flex-1" danger @click="close">Cancel</app-button>
            <app-button class="flex-1" info @click="close">Confirm</app-button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
