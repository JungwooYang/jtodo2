import { useForm } from "react-hook-form";
import { useRecoilState, atom } from "recoil";
interface IForm {
  todo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((newTodos) => [
      { text: todo, id: Date.now(), category: "TODO" },
      ...newTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <div>
      <h1>TODOS</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a todo" })}
          placeholder="Write a todo"
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
