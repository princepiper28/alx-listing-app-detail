export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  images?: string[]; // optional gallery
  description: string;
  category: string[]; // e.g., ["apartment", "family"]
  price: number;
  discount?: string; // optional field
  address: {
    city: string;
    state?: string; // optional for flexibility
    country: string;
  };
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}
