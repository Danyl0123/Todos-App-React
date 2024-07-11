import { SET_TODO } from "../actionTypes";

const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: {
      const { data } = action.payload;
      return { ...state, data };
    }
    default:
      return state;
  }
};

export default todos;
