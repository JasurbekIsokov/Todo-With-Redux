import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../constants/todoConstants";

export const addTodoAction = (todosItems) => {
  return {
    type: ADD_TODO,
    payload: {
      ...todosItems,
    },
  };
};

export const deletTodoAction = (todosItems) => {
  return {
    type: DELETE_TODO,
    payload: {
      ...todosItems,
    },
  };
};

export const doneTodoAction = (todosItems) => {
  return {
    type: DONE_TODO,
    payload: {
      ...todosItems,
    },
  };
};
