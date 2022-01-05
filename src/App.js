//import './App.css';

import { useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

/*const todosDefault = [
  { text: "estudiar GCP", completed: true, id: 1 },
  { text: "estudiar backend", completed: false, id: 2 },
  { text: "estudiar azure", completed: false, id: 3 },
];*/

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((item) => !!item.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((item) => {
      const textItems = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return textItems.includes(searchText);
    });
  }

  const completeTodo = (index) => {
    const todoIndex = todos.findIndex((item) => item.id === index);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
    //forma 1 : todos[todoIndex].completed = true;
    /*forma 2 :todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
      id: todos[todoIndex].id,
    };*/
  };

  const deleteTodo = (index) => {
    const todoIndex = todos.findIndex((item) => item.id === index);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((items) => (
          <TodoItem
            key={items.id}
            text={items.text}
            completed={items.completed}
            onComplete={() => completeTodo(items.id)}
            onDelete={() => deleteTodo(items.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
