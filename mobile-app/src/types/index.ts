export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  aktifKatilimci: number;
}

export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  price: number;
}

export interface Venue {
  id: string;
  name: string;
  rating: number;
  category: string;
}
