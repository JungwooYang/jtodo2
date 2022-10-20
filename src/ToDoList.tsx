import { useForm } from "react-hook-form";
/* function TodoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          placeholder="what do you have to do?"
        />
        <button>add</button>
      </form>
    </div>
  );
}
*/
function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("todo")} placeholder="what do you have to do?" />
        <input {...register("name")} placeholder="name" />
        <input {...register("number")} placeholder="number" />
        <input {...register("lover")} placeholder="lover" />
        <button>add</button>
      </form>
    </div>
  );
}
export default TodoList;
