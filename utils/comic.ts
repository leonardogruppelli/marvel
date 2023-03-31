import { IComic } from "~/types/comic";

export function getPrice(comic: Omit<IComic, "id">): number {
  return comic.prices?.[0].price || 0;
}
