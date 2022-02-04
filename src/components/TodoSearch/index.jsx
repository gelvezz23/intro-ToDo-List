import React, { useContext } from "react";
import { TodoContext } from "../../todoContext";
import "./styles.css";
function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext)

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        className="TodoSearch"
        onChange={(event) => handleSearch(event)}
        placeholder="Cebolla"
        value={searchValue}
      />
    </div>
  );
}

export default TodoSearch;
