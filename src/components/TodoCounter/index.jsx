import React from "react";
import "./styles.css";
function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1 className="TodoCounter">
        Has completado {completed} de {total} tareas
      </h1>
    </div>
  );
}

export { TodoCounter };
