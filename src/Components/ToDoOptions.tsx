import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

const ToDoOptions = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  return (
    <select value={category} onInput={onInputHandler}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
};

export default ToDoOptions;
