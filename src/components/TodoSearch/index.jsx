import React from "react";
import "./styles.css";
function TodoSearch({ searchValue, setSearchValue }) {
  
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
