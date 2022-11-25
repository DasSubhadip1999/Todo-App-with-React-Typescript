import { TodoContext } from "../context/todoContext";
import { useContext } from "react";

const Modal = () => {
  const todoContext = useContext(TodoContext);

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#150050] text-white">
          <h3 className="font-bold text-lg">Delete Todo Item</h3>
          <p className="py-4">
            This will delete your todo item and its irreversible
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn bg-[#FB2576]"
              onClick={() => todoContext?.modal(false)}
            >
              No
            </label>
            <label
              htmlFor="my-modal-6"
              className="btn bg-[#FB2576]"
              onClick={() => todoContext?.modal(true)}
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
