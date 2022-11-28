import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../@types/todo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const TodoContext = createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [editId, setEditId] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Todo>({
    id: uuidv4(),
    title: "",
    description: "",
    isDone: false,
  });

  const [todos, setTodos] = useState<Todo[]>([
    // {
    //   id: uuidv4(),
    //   title: "Test Title 1",
    //   description: "Test description 1",
    //   isDone: false,
    // },
  ]);

  //get data from server
  const getTodos = async () => {
    const res = await axios.get("/todos");
    setTodos(res.data);
  };

  //post todos to server
  const postTodos = async (todo: Todo) => {
    const res = await axios.post("/todos", todo);

    if (res.status === 400) {
      console.log(res.data);
    }
  };

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
    setEditId(id);
  };

  const updateTodo = async (id: string) => {
    const res = await axios.put(`/todos/${id}`, formData);
    setTodos((prevState) =>
      prevState.map((todo) => (todo.id === id ? formData : todo))
    );
    if (res.status === 400) {
      console.log(res.data);
    }
  };

  const deleteTodo = async (id: string) => {
    const res = await axios.delete(`/todos/${id}`);
    if (res.status === 400) {
      console.log(res.data);
    }
  };

  const todoDone = async (id: string, type: boolean) => {
    const res = await axios.patch(`/todos/${id}`, { isDone: type });
    if (res.status === 400) {
      console.log(res.data);
    }
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
        setEditId,
        modal,
        getTodos,
        postTodos,
        todoDone,
        editId,
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
