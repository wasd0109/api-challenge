import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        className="bg-blue-200 p-4 m-auto flex"
        type="search"
        name="searchBox"
        placeholder="Search for characters"
      />
    </div>
  );
}

export default SearchBar;
