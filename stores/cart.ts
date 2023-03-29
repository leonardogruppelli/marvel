import type { Comic } from "~/types/comic";

export const useCartStore = defineStore("cart", () => {
  const cart = useCookie<Comic[]>("cart", {
    default: () => [],
  });

  const grouped = computed<Comic[]>(() =>
    cart.value.filter(
      (value, index, self) =>
        index === self.findIndex((item) => item.id === value.id)
    )
  );

  const total = computed<number>(() =>
    cart.value.reduce((acc, value) => {
      const price = value.prices?.[0].price || 0;

      return acc + price;
    }, 0)
  );

  function add(comic: Comic): void {
    cart.value.push(comic);
  }

  function remove(comic: Comic): void {
    cart.value.splice(
      cart.value.findIndex((item) => item.id === comic.id),
      1
    );
  }

  function quantity(comic: Comic): number {
    return cart.value.filter((item) => item.id === comic.id).length;
  }

  function subtotal(comic: Comic): number {
    return quantity(comic) * getPrice(comic);
  }

  async function buy(): Promise<void> {
    cart.value = [];

    await navigateTo({ name: "comics" });
  }

  return {
    cart,
    grouped,
    total,
    add,
    remove,
    quantity,
    subtotal,
    buy,
  };
});
