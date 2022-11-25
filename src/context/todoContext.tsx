import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../@types/todo";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuidv4(),
      title: "Test Title 1",
      description: "Test description 1",
      isDone: false,
    },
  ]);

  const saveTodo = (todo: Todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const updateTodo = (id: number) => {};

  const deleteTodo = (id: number) => {};

  return (
    <TodoContext.Provider value={{ saveTodo, updateTodo, deleteTodo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
