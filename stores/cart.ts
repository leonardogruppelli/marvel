import type { Comic } from "~/types/comic";

export const useCartStore = defineStore("cart", () => {
  const cart = useCookie<Comic[]>("cart", {
    default: () => [],
  });

  const total = computed<number>(() =>
    cart.value.reduce((acc, value) => {
      const price = value.prices?.[0].price || 0;

      return acc + price;
    }, 0)
  );

  function add(comic: Comic) {
    cart.value.push(comic);
  }

  function buy() {
    cart.value = [];
  }

  return {
    cart,
    total,
    add,
    buy,
  };
});
