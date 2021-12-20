import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoOptions from "./ToDoOptions";

const Container = styled.div`
  height: 90vh;
  width: 80%;
  background-color: white;
  border-radius: 1rem;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
  color: ${(props) => props.theme.accentColor};
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const toDosValue = useRecoilValue(toDoState);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(toDosValue));
  }, [toDosValue]);

  return (
    <Container>
      <Title>오늘 할 일</Title>

      <ToDoOptions />
      <CreateToDo />

      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoList;
