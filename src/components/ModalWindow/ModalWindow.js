import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Input from "../Input/Input";
import ButtonSubmit from "../Button/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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
  DataValue,
  installDataValue,
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Basic date time picker"
                    value={DataValue}
                    onChange={(newValue) => installDataValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
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
