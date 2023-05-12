import React from "react";
import { useDispatch } from "react-redux";
import { deletTodoAction, doneTodoAction } from "../actions/todosAction";

const TodoItem = ({ text, id, isDone }) => {
  const dispatch = useDispatch();

  const todoHandleRemove = () => {
    dispatch(
      deletTodoAction({
        todoId: id,
      })
    );
  };

  const todoHandleDone = (e) => {
    dispatch(
      doneTodoAction({
        todoId: id,
        isDone: e.target.checked,
      })
    );
  };

  return (
    <li
      id={id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2 "
          id="flexCheckDefault"
          onChange={todoHandleDone}
        />
        <label
          htmlFor="flexCheckDefault"
          className={`form-check-label ${
            isDone ? "text-decoration-line-through" : ""
          }`}
        >
          {text ? text : "Default checkbox"}
        </label>
      </div>
      <button className="btn btn-danger" onClick={todoHandleRemove}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
