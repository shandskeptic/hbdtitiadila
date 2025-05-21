export interface Photo {
  id: number;
  url: string;
  caption: string;
}

export interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}