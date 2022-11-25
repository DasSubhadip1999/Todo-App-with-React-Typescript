import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
