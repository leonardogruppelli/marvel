<template>
  <div class="group">
    <nuxt-link to="/">
      <div
        class="p-2 mb-8 border-2 border-red-500 shadow-lg transition-all overflow-hidden group-hover:shadow-xl group-hover:translate-y-2"
      >
        <div class="pb-2/3 relative">
          <app-thumbnail />
        </div>
      </div>

      <div class="flex flex-col gap-1 mb-4">
        <h3
          class="max-h-[calc(theme(spacing.7)*2)] text-lg font-bold text-fade transition-colors overflow-hidden after:h-7 group-hover:text-red-500"
        >
          Title
        </h3>

        <small
          class="max-h-[calc(theme(spacing.5)*3)] text-sm text-justify text-fade overflow-hidden after:h-5"
        >
          Description
        </small>
      </div>
    </nuxt-link>

    <div v-if="false" class="flex">
      <app-tag>$9,99</app-tag>

      <app-button v-if="false" class="flex-1">
        <div class="w-full flex items-center justify-between relative z-10">
          <button @click="undefined">
            <ion-minus />
          </button>

          1

          <button @click="undefined">
            <ion-plus />
          </button>
        </div>
      </app-button>

      <app-button v-else class="flex-1">
        <template #icon>
          <ion-cart />
        </template>

        Add to Cart
      </app-button>
    </div>
  </div>
</template>
