import { FaBitbucket } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import ReadTodoWindow from "../ReadTodoWindow/ReadTodoWindow";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = ({ className, isDone, editItem, item, handleDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <li className={item.isDone ? className + " done" : className}>
      <div className="todo__description">
        <Checkbox
          className="checkbox"
          {...label}
          onClick={() => {
            isDone(item.id, item.isDone);
          }}
          checked={item.isDone}
        />
        <div className="todo__text" onClick={handleOpenModal}>
          <span className="item__name">{item.name}</span>
          <p className="item__description">
            {item.description.length > 80
              ? item.description.slice(0, 80) + "..."
              : item.description}
          </p>
        </div>
        <ReadTodoWindow
          show={showModal}
          handleClose={handleCloseModal}
          name={item.name}
          description={item.description}
        />
      </div>
      <div className="icon-group">
        <FaBitbucket
          className="icon"
          onClick={() => {
            handleDelete(item.id);
          }}
        />
        <FaPencilAlt
          onClick={() => {
            editItem(item.name, item.description, item.id);
          }}
          className="icon"
        />
      </div>
    </li>
  );
};

export default Item;
