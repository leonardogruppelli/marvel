import type { Base } from "~/types/common";

export interface Comic extends Base {
  prices?: ComicPrice[];
  title: string;
}

export interface ComicPrice {
  type: "printPrice";
  price: number;
}
