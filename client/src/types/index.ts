export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  highlights: string[];
  duration: string;
}

export interface Tour {
  id: number;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  included: string[];
}

export interface Booking {
  destinationId?: number;
  tourId?: number;
  name: string;
  email: string;
  date: string;
  people: number;
}
