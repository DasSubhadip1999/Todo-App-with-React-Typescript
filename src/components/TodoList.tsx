import { useContext, useEffect } from "react";
import { TodoContext } from "../context/todoContext";
import TodoListItem from "./TodoListItem";
//import { Todo } from "../@types/todo";
import { AnimatePresence, motion } from "framer-motion";

const TodoList: React.FC = () => {
  // console.log(useContext(TodoContext));
  const todoContext = useContext(TodoContext);

  //const { editMode : boolean } = useContext(TodoContext);

  useEffect(() => {
    todoContext?.getTodos();
    // eslint-disable-next-line
  }, [todoContext?.todos]);

  return (
    <div className="mt-4">
      <h1 className="text-center font-bold text-xl text-white py-3 bg-[#3F0071] stroke-slate-100">
        Todo List
      </h1>
      <div className="max-h-80 overflow-y-auto md:mx-[14%] md:mt-2">
        <AnimatePresence>
          {todoContext?.todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TodoListItem {...todo} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoList;
