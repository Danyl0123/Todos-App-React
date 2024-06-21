import { FaBitbucket } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = ({ className, isDone, editItem, item, handleDelete }) => {
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
        <div className="todo__text">
          <span>{item.name}</span>
          <p>
            {item.description.length > 140
              ? item.description.slice(0, 140) + "..."
              : item.description}
          </p>
        </div>
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
            editItem(item.name, item.id);
          }}
          className="icon"
        />
      </div>
    </li>
  );
};
export default Item;