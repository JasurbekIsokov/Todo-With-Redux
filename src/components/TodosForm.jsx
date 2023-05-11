import React from "react";
import { useSelector } from "react-redux";

const TodosForm = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="card-body">
      <form className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput"
            placeholder="e.g. Buy eggs"
          />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default TodosForm;
