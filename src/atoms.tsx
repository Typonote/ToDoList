import { atom } from "recoil";

export interface ToDoInterface {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<ToDoInterface[]>({
  key: "toDo",
  default: [],
});
