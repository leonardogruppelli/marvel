<template>
  <div class="py-10">
    <div class="clear-both">
      <div class="w-2/5 float-left p-2 mr-10 border-2 border-red-500 shadow-xl">
        <div class="pb-2/3 relative">
          <app-thumbnail class="w-full h-full absolute inset-0" />
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h1 class="text-4xl text-red-500">Title</h1>
        <p class="text-xl text-justify">Description</p>
      </div>

      <div v-if="false" class="flex mt-8">
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
  </div>
</template>
