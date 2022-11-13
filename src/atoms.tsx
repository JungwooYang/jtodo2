import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}
export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: "category",
  default: Categories.TODO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
