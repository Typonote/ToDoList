import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ToDoInterface, toDoState } from "../atoms";

const ToDoList = styled.li`
  display: flex;
  flex-direction: row;
  width: 500px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.2rem;
  color: black;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;

  button {
    margin-right: 0.5rem;
  }
`;

const ToDo = ({ text, category, id }: ToDoInterface) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <ToDoList>
      <div style={{ width: "60%" }}>
        <span>{text}</span>
      </div>
      <div>
        {category !== "DOING" && (
          <button name="DOING" onClick={onClickHandler}>
            Doing
          </button>
        )}
        {category !== "TO_DO" && (
          <button name="TO_DO" onClick={onClickHandler}>
            To Do
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={onClickHandler}>
            Done
          </button>
        )}
      </div>
    </ToDoList>
  );
};

export default ToDo;
