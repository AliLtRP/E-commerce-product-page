import { create } from "zustand";

type cart = {
  itemsNumber: number;
  setitemsNumber: (number: number) => void;
};

const useCart = create<cart>((set) => ({
  itemsNumber: 0,
  setitemsNumber: (itemsNumber: number) => set({ itemsNumber }),
}));

export { useCart };
