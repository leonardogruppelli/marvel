import type { RouteLocationRaw } from "vue-router";
import type { Image } from "~/types/common";
import type { ComicPrice } from "~/types/comic";

export interface CardProps {
  description: string | null;
  id: number;
  prices?: ComicPrice[];
  thumbnail: Image;
  title: string;
  to?: RouteLocationRaw;
}
