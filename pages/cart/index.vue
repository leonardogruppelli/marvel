<script setup lang="ts">
import { Variant } from "~/types/variant";

useHead({
  title: "Marvel - Cart",
});

const cartStore = useCartStore();

const { grouped, total } = storeToRefs(cartStore);

const { add, remove, quantity, subtotal, buy } = cartStore;

const alertOpen = ref<boolean>(false);

function openAlert() {
  alertOpen.value = true;
}

function closeAlert() {
  alertOpen.value = false;
}

async function confirm() {
  await buy();

  closeAlert();
}
</script>

<template>
  <div class="py-10">
    <div
      v-if="grouped.length"
      class="flex flex-col gap-20 lg:flex-row lg:items-start"
    >
      <div class="flex-[2]">
        <ul class="flex flex-col gap-14 lg:gap-6">
          <li v-for="comic in grouped" :key="comic.id">
            <div
              class="flex flex-col items-center gap-4 lg:flex-row lg:items-start"
            >
              <div class="w-48 shrink-0 p-2 border-2 border-red-500 shadow-lg">
                <div class="pb-2/3 relative">
                  <app-thumbnail
                    :thumbnail="comic.thumbnail"
                    :alt="comic.title"
                    class="w-full h-full absolute inset-0"
                  />
                </div>
              </div>

              <div>
                <div class="flex flex-col gap-1 mb-4">
                  <h3 class="mb-1 text-lg font-bold">
                    {{ comic.title }}
                  </h3>

                  <small v-if="comic.description" class="text-sm text-justify">
                    {{ comic.description }}
                  </small>
                </div>

                <div class="flex items-center text-lg">
                  <div
                    class="h-10 px-4 flex items-center border border-r-0 border-red-500"
                  >
                    <strong class="font-bold">{{
                      toUSD(subtotal(comic))
                    }}</strong>
                  </div>

                  <button
                    class="w-10 h-10 flex items-center justify-center border border-red-500"
                    @click="remove(comic)"
                  >
                    <ion-minus />
                  </button>

                  <strong
                    class="w-10 h-10 flex items-center justify-center border-y border-red-500 font-bold"
                  >
                    {{ quantity(comic) }}
                  </strong>

                  <button
                    class="w-10 h-10 flex items-center justify-center border border-red-500"
                    @click="add(comic)"
                  >
                    <ion-plus />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="flex-1 p-8 border-2 border-red-500 shadow-lg lg:sticky lg:top-44"
      >
        <h2 class="mb-2 text-lg font-bold">Payment information</h2>

        <hr class="mb-4 border-b border-gray-800" />

        <div class="mb-2 text-gray-500">
          <div class="flex items-center justify-between mb-2">
            <p>Subtotal:</p>

            <strong class="font-bold">{{ toUSD(total) }}</strong>
          </div>

          <div class="flex items-center justify-between">
            <p>Shipping:</p>

            <strong class="font-bold">Free</strong>
          </div>
        </div>

        <div class="flex items-center justify-between mb-6">
          <strong class="font-bold">Total:</strong>

          <strong class="text-lg font-bold">{{ toUSD(total) }}</strong>
        </div>

        <app-button :variant="Variant.Success" full @click="openAlert">
          <template #icon>
            <ion-checkmark />
          </template>

          Buy
        </app-button>
      </div>
    </div>

    <div v-else class="max-w-lg flex flex-col items-center mx-auto text-center">
      <ion-cart-outline class="w-56 h-56 mb-8 text-red-500" />

      <h2 class="mb-4 text-5xl font-bold">Your cart is empty</h2>

      <h4 class="mb-6 text-2xl text-gray-500">
        Do you want to pay a visit to the
        <nuxt-link :to="{ name: 'comics' }" class="text-red-500"
          >comics page</nuxt-link
        >?
      </h4>

      <small class="mb-8 text-lg">
        There you can find a long variety of Marvel Comics, including
        best-sellers aswell as new releases.
      </small>

      <nuxt-link :to="{ name: 'comics' }">
        <app-button>
          <template #icon>
            <ion-open />
          </template>

          Go to comics page
        </app-button>
      </nuxt-link>
    </div>

    <app-alert :open="alertOpen" @close="closeAlert">
      <template #header>
        <h2 class="mb-6 text-3xl font-bold">Confirm purchase</h2>
      </template>

      <template #body>
        <div class="flex flex-col text-xl text-gray-800">
          <h4 class="mb-4">
            Do you confirm the purchase of the following items:
          </h4>

          <ul class="mb-4 list-disc list-inside text-base text-red-500">
            <li v-for="comic in grouped" :key="comic.id">
              {{ comic.title }} [{{ quantity(comic) }}]
            </li>
          </ul>

          <h4 class="mb-8">
            for the value of
            <strong class="font-bold text-gray-900">{{ toUSD(total) }}</strong
            >?
          </h4>
        </div>
      </template>

      <template #footer>
        <div class="w-full flex">
          <app-button
            :variant="Variant.Danger"
            class="flex-1"
            @click="closeAlert"
          >
            Cancel
          </app-button>

          <app-button :variant="Variant.Info" class="flex-1" @click="confirm">
            Confirm
          </app-button>
        </div>
      </template>
    </app-alert>
  </div>
</template>
