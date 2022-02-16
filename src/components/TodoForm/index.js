import React, { useContext, useState } from "react";
import { TodoContext } from "../../todoContext";
import "./styles.css";

function TodoForm({ setOpenModal }) {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(TodoContext);
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal((open) => !open);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
