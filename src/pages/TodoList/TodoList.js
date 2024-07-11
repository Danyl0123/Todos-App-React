import { useEffect, useState } from "react";
import "./TodoList.css";
import { API_URL } from "../../assets/constants";
import Item from "../../components/Item/Item";
import { GrNotes } from "react-icons/gr";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { connect } from "react-redux";
import { setTodo } from "../../modules/actions/todos";

const TodoList = ({ setTodo, todos }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);
  const [dataValue, setDataValue] = useState(undefined);
  const installDataValue = (value) => setDataValue(value);
  const handleClose = () => {
    setShow(false);
    if (editId) {
      setEditId(null);
      setDescriptionValue("");
      setValue("");
    }
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!isLoaded) {
      getTodos();
      setIsLoaded(true);
    }
  }, [isLoaded]);
  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todo`);
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error(error);
    }
  };
  const addTodo = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: false,
          name: value,
          description: descriptionValue,
          deadline: new Date(dataValue),
        }),
      });
      setIsLoaded(false);
      setValue("");
      setDescriptionValue("");
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/todo/${id}`, {
        method: "DELETE",
      });
      setIsLoaded(false);
    } catch (error) {
      console.error(error);
    }
  };
  const editTodo = async (event) => {
    event.preventDefault();
    try {
      await fetch(`${API_URL}/todo/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: false,
          name: value,
          description: descriptionValue,
          deadline: new Date(dataValue),
        }),
      });
      setIsLoaded(false);
      setValue("");
      setDescriptionValue("");
      setShow(false);
      setEditId(null);
    } catch (error) {
      console.error(error);
    }
  };
  const setIsDone = async (id, isDone) => {
    try {
      await fetch(`${API_URL}/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: !isDone,
        }),
      });
      setIsLoaded(false);
    } catch (error) {
      console.error(error);
    }
  };
  const editItem = (value, descriptionValue, itemId) => {
    setShow(true);
    setValue(value);
    setDescriptionValue(descriptionValue);
    setEditId(itemId);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeDesciption = (event) => {
    setDescriptionValue(event.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="container header__content">
          <div className="header__logo">
            <GrNotes />
            <h1 className="header__title">Todo List</h1>
          </div>
          <button className="button__add" onClick={handleShow}>
            Add todo
          </button>
          <ModalWindow
            editId={editId}
            handleClose={handleClose}
            show={show}
            handleChange={handleChange}
            value={value}
            descriptionValue={descriptionValue}
            handleClick={editId ? editTodo : addTodo}
            handleChangeDesciption={handleChangeDesciption}
            dataValue={dataValue}
            installDataValue={installDataValue}
          />
        </div>
      </div>
      <div className="container">
        <div className="todo-list">
          <ul>
            {todos.map((item) => (
              <Item
                className="todo__item"
                isDone={setIsDone}
                key={item.id}
                item={item}
                handleDelete={deleteTodo}
                editItem={editItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps, { setTodo })(TodoList);
