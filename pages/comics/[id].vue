<script setup lang="ts">
import type { IApiResponse } from "~/types/api";
import type { IComic } from "~/types/comic";

const { add, remove, quantity } = useCartStore();

const route = useRoute();

const { data } = await useApi<IApiResponse<IComic[]>>(
  `/comics/${route.params.id}`
);

const comic = computed<IComic>(() => data.value?.data.results[0]!);

const price = computed<number>(() => getPrice(comic.value));
</script>

<template>
  <div class="py-10">
    <div class="clear-both">
      <div class="w-2/5 float-left p-2 mr-10 border-2 border-red-500 shadow-xl">
        <div class="pb-2/3 relative">
          <app-thumbnail
            :alt="comic.title"
            :thumbnail="comic.thumbnail"
            class="w-full h-full absolute inset-0"
          />
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h1 class="text-4xl text-red-500">{{ comic.title }}</h1>
        <p class="text-xl text-justify">{{ trim(comic.description) }}</p>
      </div>

      <div v-if="price" class="flex mt-8">
        <app-tag>{{ toUSD(price) }}</app-tag>

        <app-button v-if="quantity(comic)" class="flex-1">
          <div class="w-full flex items-center justify-between relative z-10">
            <button @click="remove(comic)">
              <ion-minus />
            </button>

            {{ quantity(comic) }}

            <button @click="add(comic)">
              <ion-plus />
            </button>
          </div>
        </app-button>

        <app-button v-else class="flex-1" @click="add(comic)">
          <template #icon>
            <ion-cart />
          </template>

          Add to Cart
        </app-button>
      </div>
    </div>
  </div>
</template>
