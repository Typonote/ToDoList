import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const ToDoForm = styled.form`
  display: flex;
  flex-direction: row;
  color: #5d5d5d;
  margin: 1rem;
  background-color: transparent;

  input {
    color: #5d5d5d;
    font-size: 1rem;
    background-color: transparent;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #bdbdbd;
    margin-right: 1rem;

    &:focus {
      outline: none;
    }
  }
`;

const Btn = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid #487eb0;
  color: #487eb0;

  &:hover {
    color: white;
    background-color: #487eb0;
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
        placeholder="오늘 할 일"
      />
      <Btn>Add</Btn>
    </ToDoForm>
  );
};

export default CreateToDo;
