import type { Image } from "~/types/common";

export interface CardInterface {
  description: string | null;
  id: number;
  thumbnail: Image;
  title: string;
}
