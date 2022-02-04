import React, { useContext } from "react";
import { TodoContext } from "../../todoContext";
import "./styles.css";
function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} tareas
      </h1>
    </div>
  );
}

export default TodoCounter;
