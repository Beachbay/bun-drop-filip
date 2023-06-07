import React from "react";

function Modal(props) {
  function toggleModal(e) {
    if (e.target.classList.contains("modal-container")) {
      props.toggleModal();
    }
  }

  if (props.paymentMethod === "swish") {
    return (
      <div className="modalContainer" onClick={toggleModal}>
        <h1>swish</h1>
      </div>
    );
  }

  return <div></div>;
}

export default Modal;
