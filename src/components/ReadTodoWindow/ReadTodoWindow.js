import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ReadTodoWindow({ show, handleClose, name, description, dataValue }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <p className="modal__date">
          {dataValue
            ? `Виконати до ${new Date(dataValue).toLocaleString()}`
            : ``}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReadTodoWindow;
