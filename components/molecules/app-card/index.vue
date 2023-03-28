<script setup lang="ts">
import type { CardProps } from "./types";

const { add } = useCartStore();

const props = defineProps<CardProps>();

const price = computed<number | undefined>(() => props.prices?.[0].price);

function addToCart() {
  add(props);
}
</script>

<template>
  <div class="group">
    <nuxt-link :to="props.to">
      <div
        class="p-2 mb-8 border-2 border-red-500 shadow-lg transition-all overflow-hidden group-hover:shadow-xl group-hover:translate-y-2"
      >
        <div class="pb-2/3 relative">
          <app-thumbnail
            :thumbnail="thumbnail"
            :alt="title"
            class="w-full h-full absolute inset-0 transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1 mb-4">
        <h3
          class="max-h-[calc(theme(spacing.7)*2)] text-lg font-bold text-fade transition-colors overflow-hidden after:h-7 group-hover:text-red-500"
        >
          {{ title }}
        </h3>

        <small
          v-if="description"
          class="max-h-[calc(theme(spacing.5)*3)] text-sm text-justify text-fade overflow-hidden after:h-5"
        >
          {{ description }}
        </small>
      </div>
    </nuxt-link>

    <div v-if="price" class="flex">
      <app-tag>
        {{ toUSD(price) }}
      </app-tag>

      <app-button class="flex-1" @click="addToCart">
        <template #icon>
          <ion-cart />
        </template>

        Buy
      </app-button>
    </div>
  </div>
</template>
