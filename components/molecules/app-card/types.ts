import type { RouteLocationRaw } from "vue-router";
import type { IThumbnail } from "~/types/thumbnail";
import type { IComicPrice } from "~~/types/comic";

export interface ICardProps {
  title: string;
  description: string | null;
  thumbnail: IThumbnail;
  to: RouteLocationRaw;
  prices?: IComicPrice[];
}
