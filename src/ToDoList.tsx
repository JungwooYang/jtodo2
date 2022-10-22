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

interface Iform {
  email: string;
  name: string;
  password: string;
  lover: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iform>({ defaultValues: { email: "@naver.com" } });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "Only naver.com emails available",
            },
          })}
          placeholder="email"
          style={{ borderColor: errors?.email?.message ? "red" : "" }}
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", { required: "write here" })}
          placeholder="name"
          style={{ borderColor: errors?.name?.message ? "red" : "" }}
        />
        <span>{errors?.name?.message}</span>
        <input
          {...register("password", { required: "write here" })}
          placeholder="password"
          style={{ borderColor: errors?.password?.message ? "red" : "" }}
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("lover", { required: "write here" })}
          placeholder="lover"
          style={{ borderColor: errors?.lover?.message ? "red" : "" }}
        />
        <span>{errors?.lover?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}
export default TodoList;
