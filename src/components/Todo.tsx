import React from "react";
import { ITodo, todoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function Todo({ text, id, category }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name };
      console.log(oldTodos, targetIndex, newTodo);
      return oldTodos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          todo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          done
        </button>
      )}
    </li>
  );
}

export default Todo;
