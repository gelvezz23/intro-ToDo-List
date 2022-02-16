import React, { useContext } from "react";
import TodoCounter from "./../components/TodoCounter";
import TodoSearch from "./../components/TodoSearch";
import TodoList from "./../components/TodoList";
import TodoItem from "./../components/TodoItem";
import CreateTodoButton from "./../components/CreateTodoButton";
import Modal from "../components/Modal";
import { TodoContext } from "./../todoContext";
import TodoForm from "../components/TodoForm";
import MyLoader from "../components/Loading";

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
        {loading && <MyLoader />}
        {!loading && !searchedTodos?.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos?.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id, todo.text)}
            onDelete={() => deleteTodo(todo.id, todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
