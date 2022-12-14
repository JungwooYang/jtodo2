import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}
function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((newTodo) => [
      { text: todo, id: Date.now(), category },
      ...newTodo,
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "write a todo",
          minLength: {
            value: 2,
            message: "it shold be more than 2 letters.",
          },
        })}
        placeholder="what do you have to do?"
      />
      <button>ADD</button>
    </form>
  );
}

export default CreateTodo;
