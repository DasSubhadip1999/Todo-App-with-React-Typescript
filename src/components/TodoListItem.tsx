import { useContext, useState } from "react";
import { Todo } from "../@types/todo";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TodoContext } from "../context/todoContext";
import { v4 as uuidv4 } from "uuid";
//

const TodoListItem = ({ title, description, id }: Todo) => {
  const todoContext = useContext(TodoContext);

  return (
    <div
      className={`mx-5 my-4 rounded-md p-2  text-white flex relative ${
        todoContext?.editMode ? "bg-[#3f0071]" : "bg-[#FB2576]"
      }`}
    >
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex text-lg absolute right-2 top-2">
        <BiEdit
          className="mx-2 cursor-pointer"
          onClick={() => {
            todoContext?.setEditMode((prev) => !prev);
            todoContext?.editFn(id);
            // if (todoContext?.editMode) {
            //   todoContext?.setFormData({
            //     id: uuidv4(),
            //     title: "",
            //     description: "",
            //     isDone: false,
            //   });
            // }
          }}
        />
        <MdOutlineDoneOutline className="mx-2 cursor-pointer" />
        <label
          htmlFor="my-modal-6"
          className="mx-2"
          onClick={() => todoContext?.setModalId(id)}
        >
          <RiDeleteBin6Line className="cursor-pointer" />
        </label>
      </div>
    </div>
  );
};

export default TodoListItem;
