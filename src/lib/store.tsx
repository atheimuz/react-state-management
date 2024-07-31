import { create } from "zustand";

type todo = {
    list: Array<string>;
    addList: (text: string) => void;
};

export const todoStore = create<todo>((set) => ({
    list: [],
    addList: (text) => set((state) => ({ list: [...state.list, text] })),
}));
