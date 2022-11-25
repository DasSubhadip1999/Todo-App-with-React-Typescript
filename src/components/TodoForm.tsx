import { useState, useContext } from "react";
import { Todo } from "../@types/todo";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";

const TodoForm: React.FC = () => {
  const [formData, setFormData] = useState<Todo>({
    id: uuidv4(),
    title: "",
    description: "",
    isDone: false,
  });

  const { title, description } = formData;
  const todoContext = useContext(TodoContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title || description) {
      todoContext?.saveTodo(formData);
      setFormData({
        id: uuidv4(),
        title: "",
        description: "",
        isDone: false,
      });
    } else {
      toast.error("Please fill all details", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <form className="ml-5 mt-2" onSubmit={onSubmit}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-white">Title</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-[#150050] text-white"
          value={title}
          onChange={onChange}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-white">Description</span>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-[#150050] text-white"
          value={description}
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="btn bg-[#000] border-[1px] border-white w-full max-w-xs my-3"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
