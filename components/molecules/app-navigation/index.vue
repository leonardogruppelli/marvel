<script setup lang="ts">
const route = useRoute();

const routes = [
  {
    name: "index",
    label: "Home",
  },
];

function active(name: string): boolean {
  return !!route.name?.toString().includes(name);
}
</script>

<template>
  <nav class="content h-full">
    <ul class="h-full flex items-center justify-center gap-4 px-3">
      <li v-for="route in routes" :key="route.name">
        <nuxt-link
          :to="{ name: route.name }"
          :class="[
            'block p-2 relative text-lg font-light uppercase',
            'after:w-full after:h-[2px] after:absolute after:bottom-0 after:left-0 after:bg-red-500 after:opacity-0 after:scale-x-0 after:transition-all after:duration-300',
            'hover:after:opacity-100 hover:after:scale-x-100',
            active(route.name) && 'after:opacity-100 after:scale-x-100',
          ]"
        >
          {{ route.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
