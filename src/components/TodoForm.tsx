import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";

const TodoForm: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const formTexts = todoContext?.formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todoContext?.setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      (formTexts?.title || formTexts?.description) &&
      !todoContext?.editMode
    ) {
      todoContext?.postTodos(todoContext?.formData);
      todoContext?.setFormData({
        id: uuidv4(),
        title: "",
        description: "",
        isDone: false,
      });
    } else if (
      (formTexts?.title || formTexts?.description) &&
      todoContext?.editMode
    ) {
      todoContext.updateTodo(formTexts.id);
      todoContext?.setFormData({
        id: uuidv4(),
        title: "",
        description: "",
        isDone: false,
      });
      todoContext.setEditMode(false);
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
    <form className="ml-5 mt-2 md:my-6 md:mx-[15%]" onSubmit={onSubmit}>
      <div className="form-control w-full max-w-xs md:max-w-full sm:max-w-[96%] lg:max-w-full">
        <label className="label">
          <span className="label-text text-white">Title</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-[#150050] text-white md:max-w-full sm:max-w-full lg:max-w-full"
          value={formTexts?.title}
          onChange={onChange}
        />
      </div>
      <div className="form-control w-full max-w-xs md:max-w-full sm:max-w-[96%] lg:max-w-full">
        <label className="label">
          <span className="label-text text-white">Description</span>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-[#150050] text-white md:max-w-full sm:max-w-full lg:max-w-full"
          value={formTexts?.description}
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="btn bg-[#000] border-[1px] border-white w-full max-w-xs my-3 md:max-w-full md:mt-5 sm:max-w-full lg:max-w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
