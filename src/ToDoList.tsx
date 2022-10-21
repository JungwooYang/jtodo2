import { useForm } from "react-hook-form";

/* function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todo.length < 10) {
      return setTodoError("Todo should be longer than 10 letters.")
    }
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
  const { register, formState, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("todo", {
            required: "should write down something.",
            minLength: {
              value: 2,
              message: " this must go longer than 2 letters",
            },
          })}
          placeholder="what do you have to do?"
        />
        <input {...register("name")} placeholder="name" />
        <input {...register("number")} placeholder="number" />
        <input {...register("lover")} placeholder="lover" />
        <button>add</button>
      </form>
    </div>
  );
}
export default TodoList;
