import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const TodoSelect = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 700;

  &:focus {
    outline: none;
  }
`;

const ToDoOptions = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  return (
    <TodoSelect value={category} onInput={onInputHandler}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </TodoSelect>
  );
};

export default ToDoOptions;
