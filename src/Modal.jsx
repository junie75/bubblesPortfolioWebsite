// Modal.js
import React from "react";
import "./bubbles.css";

function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content ">
        <p>{message}</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
