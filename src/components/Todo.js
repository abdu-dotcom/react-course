import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// nama function harus diawalin huruf besar
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState();

  const deleteHandler = () => {
    setModelIsOpen(true);
  };

  const closeModalHandler = () => {
    setModelIsOpen(false);
  }
  
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
