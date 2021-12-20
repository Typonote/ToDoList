import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToDoForm = styled.form`
  color: white;
  background-color: transparent;

  input {
    width: 70%;
    color: white;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    margin-right: 1rem;
  }

  button {
    background-color: #ececec;
    border: none;
    color: black;
    padding: 0.3rem;
    font-size: 1rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
`;

interface FormInterface {
  toDo: string;
}

interface ToDoInterface {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<ToDoInterface[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<FormInterface>();
  const handleValid = ({ toDo }: FormInterface) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <ToDoForm onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </ToDoForm>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;
