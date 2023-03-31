import type { IBase } from "./common";

export interface IComic extends IBase {
  title: string;
  prices: IComicPrice[];
}

export interface IComicPrice {
  type: string;
  price: number;
}
