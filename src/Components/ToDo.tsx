import React from "react";
import styled from "styled-components";
import { ToDoInterface } from "../atoms";

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

const ToDo = ({ text }: ToDoInterface) => {
  return (
    <ToDoList>
      <div style={{ width: "60%" }}>
        <span>{text}</span>
      </div>
      <div>
        <button>Doing</button>
        <button>To Do</button>
        <button>Done</button>
      </div>
    </ToDoList>
  );
};

export default ToDo;
