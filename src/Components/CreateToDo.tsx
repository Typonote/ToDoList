import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

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

const CreateToDo = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<FormInterface>();
  const handleValid = ({ toDo }: FormInterface) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </ToDoForm>
  );
};

export default CreateToDo;
