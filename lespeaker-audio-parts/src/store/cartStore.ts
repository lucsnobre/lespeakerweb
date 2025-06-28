import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  items: Product[];
  addItem: (item: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
})); 