<script setup lang="ts">
const cartStore = useCartStore();

const { cart } = storeToRefs(cartStore);
</script>

<template>
  <header class="w-full sticky top-0 left-0 bg-gray-900 text-gray-100 z-10">
    <div class="content">
      <div class="flex items-center justify-between p-3 before:w-12">
        <app-icons-logo class="w-auto h-14" />

        <nuxt-link :to="{ name: 'cart' }">
          <div class="p-2 relative">
            <ion-cart class="w-8 h-8" />

            <app-badge v-if="cart.length" :label="cart.length" />
          </div>
        </nuxt-link>
      </div>
    </div>

    <hr class="border-b border-gray-800" />

    <app-navigation />
  </header>
</template>
