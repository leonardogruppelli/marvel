import type { IComic } from "~/types/comic";

export function getPrice(comic: IComic): number {
  return comic.prices?.[0].price || 0;
}
