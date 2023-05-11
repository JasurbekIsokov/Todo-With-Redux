import React from "react";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoItems = () => {
  const todos = useSelector((state) => state.todosReducers);
  console.log(todos);

  return (
    <ul className="list-group list-group-flush">
      {todos?.length > 0 ? (
        todos?.map((item) => (
          <TodoItem text={item.text} key={item.index} id={item.id} />
        ))
      ) : (
        <h4 className="text-center m-3">Todos not created yet</h4>
      )}
    </ul>
  );
};

export default TodoItems;
