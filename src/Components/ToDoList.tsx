import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoOptions from "./ToDoOptions";

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const toDosValue = useRecoilValue(toDoState);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(toDosValue));
  }, [toDosValue]);

  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <ToDoOptions />
      <CreateToDo />

      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoList;
