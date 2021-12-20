import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

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
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>TO DO</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>DOING</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;
