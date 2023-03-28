<script setup lang="ts">
const cartStore = useCartStore();

const { total } = storeToRefs(cartStore);
</script>

<template>
  <h1>cart</h1>

  <p>Total Value: {{ toUSD(total) }}</p>
</template>
