import { create } from "zustand";

type todo = {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
};

export const todoStore = create<todo>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));
