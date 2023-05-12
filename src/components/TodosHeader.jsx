import React from "react";
import { useSelector } from "react-redux";

const TodosHeader = () => {
  const todos = useSelector((state) => state.todosReducers);

  return (
    <div className="card-header">
      <h1>Todos: {todos.length}</h1>
    </div>
  );
};

export default TodosHeader;
