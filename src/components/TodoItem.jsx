import React from "react";

const TodoItem = ({ text, id }) => {
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
        />
        <label htmlFor="flexCheckDefault" className="form-check-label">
          {text ? text : "Default checkbox"}
        </label>
      </div>
      <button className="btn btn-danger">Remove</button>
    </li>
  );
};

export default TodoItem;
