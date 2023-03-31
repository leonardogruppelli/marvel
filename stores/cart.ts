import type { IComic } from "~/types/comic";

export const useCartStore = defineStore("cart", () => {
  const cart = useCookie<IComic[]>("cart", {
    default: () => [],
  });

  const grouped = computed<IComic[]>(() =>
    cart.value.filter(
      (value, index, self) =>
        index === self.findIndex((item) => item.id === value.id)
    )
  );

  const total = computed<number>(() =>
    cart.value.reduce((acc, value) => acc + getPrice(value), 0)
  );

  function add(comic: IComic): void {
    cart.value.push(comic);
  }

  function remove(comic: IComic): void {
    cart.value.splice(
      cart.value.findIndex((item) => item.id === comic.id),
      1
    );
  }

  function quantity(comic: IComic): number {
    return cart.value.filter((item) => item.id === comic.id).length;
  }

  function subtotal(comic: IComic): number {
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
