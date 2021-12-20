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
  margin: 00;
`;

const Btn = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: white;
  }
`;

const DoingBtn = styled(Btn)`
  border: 3px solid #4cd137;
  color: #4cd137;

  &:hover {
    background-color: #4cd137;
  }
`;

const ToDoBtn = styled(Btn)`
  border: 3px solid #0097e6;
  color: #0097e6;

  &:hover {
    background-color: #0097e6;
  }
`;

const DoneBtn = styled(Btn)`
  border: 3px solid #e84118;
  color: #e84118;

  &:hover {
    background-color: #e84118;
  }
`;

const TrashBtn = styled(Btn)`
  border: 3px solid #718093;
  color: #718093;

  &:hover {
    background-color: #718093;
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
      <div style={{ width: "60%", display: "flex", alignItems: "center" }}>
        {category === Categories.DONE && (
          <h2
            style={{
              textDecoration: "line-through",
              textDecorationThickness: "3px",
              textDecorationColor: "#e84118",
            }}
          >
            {text}
          </h2>
        )}
        {category !== Categories.DONE && <h2>{text}</h2>}
      </div>
      <div>
        {category !== Categories.DOING && (
          <DoingBtn name={Categories.DOING} onClick={onClickHandler}>
            Doing
          </DoingBtn>
        )}
        {category !== Categories.TO_DO && (
          <ToDoBtn name={Categories.TO_DO} onClick={onClickHandler}>
            To Do
          </ToDoBtn>
        )}
        {category !== Categories.DONE && (
          <DoneBtn name={Categories.DONE} onClick={onClickHandler}>
            Done
          </DoneBtn>
        )}

        <TrashBtn name={Categories.DELETE} onClick={onClickDeleteHandler}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </TrashBtn>
      </div>
    </ToDoList>
  );
};

export default ToDo;
