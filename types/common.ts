export interface Base {
  description: string | null;
  id: number;
  thumbnail: Image;
}

export interface Image {
  extension: string;
  path: string;
}
