import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodoAction } from "../actions/todosAction";

const TodosForm = () => {
  const inputRef = useRef();

  const formRef = useRef();

  const dispatch = useDispatch();

  const formHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodoAction({
        text: inputRef.current.value,
        id: uuidv4(),
        isDone: false,
      })
    );

    formRef.current.reset();
  };

  return (
    <div className="card-body">
      <form
        className="mb-3 d-flex justify-content-between align-items-center"
        ref={formRef}
        onSubmit={formHandleSubmit}
      >
        <div>
          <input
            ref={inputRef}
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
