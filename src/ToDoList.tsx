import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmitandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmitandler}>
        <input
          onChange={onChangeHandler}
          value={toDo}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
