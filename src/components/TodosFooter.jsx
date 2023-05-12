import React from "react";
import { useSelector } from "react-redux";

const TodosFooter = () => {
  const todos = useSelector((state) => state.todosReducers);

  return (
    <div className="card-footer">
      {todos?.length > 0 ? (
        <button className="btn btn-primary">Save</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodosFooter;
