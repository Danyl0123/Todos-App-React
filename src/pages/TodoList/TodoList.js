import { useEffect, useState } from "react";
import "./TodoList.css";
import { API_URL } from "../../assets/constants";
import Item from "../../components/Item/Item";
import Form from "../../components/Form/Form";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);

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
      setTodos(data);
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
        }),
      });
      setIsLoaded(false);
      setValue("");
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
        }),
      });
      setIsLoaded(false);
      setValue("");
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
  const editItem = (value, itemId) => {
    setValue(value);
    setEditId(itemId);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="header">
        <div className="container header__content">
          <h1>Todo List</h1>{" "}
          <Form
            handleChange={handleChange}
            handleClick={editId ? editTodo : addTodo}
            value={value}
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
export default TodoList;
