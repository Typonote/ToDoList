import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, ToDoInterface, toDoState } from "../atoms";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrashAlt);

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

  const onClickDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
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
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClickHandler}>
            Doing
          </button>
        )}
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClickHandler}>
            To Do
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClickHandler}>
            Done
          </button>
        )}

        <button name={Categories.DELETE} onClick={onClickDeleteHandler}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </ToDoList>
  );
};

export default ToDo;
