import React, { useContext } from "react";
import TodoCounter from "./../components/TodoCounter";
import TodoSearch from "./../components/TodoSearch";
import TodoList from "./../components/TodoList";
import TodoItem from "./../components/TodoItem";
import CreateTodoButton from "./../components/CreateTodoButton";
import Modal from "../components/Modal";
import { TodoContext } from "./../todoContext";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos?.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos?.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <p>DSGSDGSD</p>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
