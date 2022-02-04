import React from "react";
import "./styles.css";
function CreateTodoButton({setOpenModal}) {
  return (
    <div>
      <button className="CreateTodoButton" onClick={() => setOpenModal((event) => !event)}>
        ➕
      </button>
    </div>
  );
}

export default CreateTodoButton;
