import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../@types/todo";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Todo>({
    id: uuidv4(),
    title: "",
    description: "",
    isDone: false,
  });

  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuidv4(),
      title: "Test Title 1",
      description: "Test description 1",
      isDone: false,
    },
  ]);

  const [modalId, setModalId] = useState<string>("");

  const saveTodo = (todo: Todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const editFn = (id: string) => {
    todos.forEach((todo: Todo) => {
      if (todo.id === id) {
        setFormData(todo);
      }
    });
  };

  const updateTodo = (id: string) => {
    setTodos((prevState) =>
      prevState.map((todo) => (todo.id === id ? formData : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const modal = (condition: boolean) => {
    if (condition) {
      deleteTodo(modalId);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        saveTodo,
        updateTodo,
        deleteTodo,
        setFormData,
        editFn,
        setEditMode,
        setModalId,
        modal,
        todos,
        editMode,
        formData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
