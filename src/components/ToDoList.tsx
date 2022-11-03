import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoSelector } from "../atoms";
import CreateTodo from "./createTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>TODOS</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>todo</option>
        <option value={Categories.DOING}>doing</option>
        <option value={Categories.DONE}>done</option>
      </select>
      <hr />
      <CreateTodo />
      <hr />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
      <hr />
    </div>
  );
}
export default TodoList;
