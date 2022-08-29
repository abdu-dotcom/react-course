import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// nama function harus diawalin huruf besar
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState();

  const buttonDelete = () => {
    setModelIsOpen(true);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={buttonDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop/>}
    </div>
  );
}

export default Todo;
