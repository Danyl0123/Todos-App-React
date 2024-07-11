import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./pages/TodoList/TodoList";
import { Provider } from "react-redux";
import store from "./modules/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </React.StrictMode>
);
