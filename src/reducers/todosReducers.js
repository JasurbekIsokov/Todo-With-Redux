import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../constants/todoConstants";

const initialState = [];

const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);

    case DONE_TODO:
      return state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          return {
            ...todo,
            isDone: action.payload.isDone,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todosReducers;
