import { useContext, useState } from "react";
import { Todo } from "../@types/todo";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TodoContext } from "../context/todoContext";
import { GrUndo } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
//

const TodoListItem = ({ title, description, id, isDone }: Todo) => {
  const todoContext = useContext(TodoContext);

  return (
    <div
      className={`mx-5 my-4 rounded-md p-2  text-white flex relative ${
        todoContext?.editMode && todoContext.editId === id
          ? "bg-[#3f0071]"
          : "bg-[#FB2576]"
      } ${isDone && "bg-gray-600 text-gray-300"}`}
    >
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex text-lg absolute right-2 top-2">
        <BiEdit
          className={`mx-2 cursor-pointer ${isDone && "pointer-events-none"}`}
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
        {isDone ? (
          <GrUndo
            className="mx-2 text-white"
            onClick={() => todoContext?.todoDone(id, false)}
          />
        ) : (
          <MdOutlineDoneOutline
            className="mx-2 cursor-pointer"
            onClick={() => todoContext?.todoDone(id, true)}
          />
        )}
        <label
          htmlFor="my-modal-6"
          className={`mx-2 ${isDone && "pointer-events-none"}`}
          onClick={() => {
            id !== "1" && todoContext?.setModalId(id);
          }}
        >
          <RiDeleteBin6Line className="cursor-pointer" />
        </label>
      </div>
      {isDone && <p className="absolute text-sm right-4 bottom-2">Completed</p>}
    </div>
  );
};

export default TodoListItem;
