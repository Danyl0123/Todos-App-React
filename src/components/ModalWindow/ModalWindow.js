import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Input from "../Input/Input";
import ButtonSubmit from "../Button/Button";
import "./ModalWindow.css";

function ModalWindow({
  editId,
  handleChangeDesciption,
  descriptionValue,
  handleChange,
  value,
  handleClick,
  handleClose,
  show,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal__title">
            {editId ? "Edit todo" : "Add todo"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Input value={value} handleChange={handleChange} editId={editId} />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="modal__description">
                todo description
              </Form.Label>
              <Form.Control
                onChange={handleChangeDesciption}
                value={descriptionValue}
                as="textarea"
                rows={3}
                className="modal__textarea"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <ButtonSubmit
            editId={editId}
            value={value}
            handleClick={handleClick}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
