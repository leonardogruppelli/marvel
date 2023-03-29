import { Comic } from "~/types/comic";

export function getPrice(comic: Comic): number {
  return comic.prices?.[0].price || 0;
}
