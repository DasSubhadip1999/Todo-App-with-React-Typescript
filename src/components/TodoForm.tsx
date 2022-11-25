import { useState } from "react";

const TodoForm: React.FC = () => {
  type Todo = {
    title: string;
    description: string;
  };

  const [formData, setFormData] = useState<Todo>({
    title: "",
    description: "",
  });

  const { title, description } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="ml-5" onSubmit={onSubmit}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={onChange}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={description}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-full max-w-xs my-3">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
