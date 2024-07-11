import { SET_TODO } from "../actionTypes";

export const setTodo = (data) => ({
  type: SET_TODO,
  payload: {
    data,
  },
});
