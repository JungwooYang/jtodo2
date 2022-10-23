import { useForm } from "react-hook-form";

interface Iform {
  todo: string;
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const handleValid = (data: Iform) => {
    console.log(data);
    setValue("todo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a todo" })}
          placeholder="Write a todo"
        />
      </form>
    </div>
  );
}
export default TodoList;
