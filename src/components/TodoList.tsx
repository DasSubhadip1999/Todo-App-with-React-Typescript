import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  //console.log(useContext(TodoContext));
  const todoContext = useContext(TodoContext);

  return (
    <div className="mt-4">
      <h1 className="text-center font-bold text-xl text-white py-3 bg-[#3F0071] stroke-slate-100">
        Todo List
      </h1>
      <div className="max-h-80 overflow-y-auto">
        {todoContext?.todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
