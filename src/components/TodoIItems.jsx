import React from "react";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";

const TodoItems = () => {
  const todos = useSelector((state) => state.todosReducers);

  return (
    <ul className="list-group list-group-flush">
      {todos?.length > 0 ? (
        todos?.map((item) => (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            isDone={item.isDone}
          />
        ))
      ) : (
        <h4 className="text-center m-3">Todos not created yet</h4>
      )}
    </ul>
  );
};

export default TodoItems;
