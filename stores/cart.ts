import type { IComic } from "~/types/comic";

export const useCartStore = defineStore("cart", () => {
  const cart = useCookie<IComic[]>("cart", {
    default: () => [],
  });

  function add(comic: IComic): void {
    cart.value.push(comic);
  }

  function remove(comic: IComic): void {
    cart.value.splice(
      cart.value.findIndex((item) => item.id === comic.id),
      1
    );
  }

  return {
    cart,
    add,
    remove,
  };
});