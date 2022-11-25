import { Todo } from "../@types/todo";

const TodoListItem = ({ title, description }: Todo) => {
  return (
    <div className="mx-5 my-4 rounded-md p-2 bg-[#FB2576] text-white">
      <h1 className="font-semibold text-lg">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TodoListItem;
