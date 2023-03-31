import type { IThumbnail } from "./thumbnail";

export interface IBase {
  id: number;
  description: string | null;
  thumbnail: IThumbnail;
}
