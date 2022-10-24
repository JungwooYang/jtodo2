import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./createTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoState);
  return (
    <div>
      <h1>TODOS</h1>
      <hr />
      <CreateTodo />
      <hr />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
