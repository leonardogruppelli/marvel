import type { IThumbnail } from "./thumbnail";

export interface IComic {
  id: number;
  title: string;
  description: string | null;
  prices: IComicPrice[];
  thumbnail: IThumbnail;
}

export interface IComicPrice {
  type: string;
  price: number;
}
