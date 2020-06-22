import React from "react";

function SearchBar({ onChange }) {
  return (
    <div>
      <input
        className="bg-blue-200 p-4 m-auto flex"
        type="search"
        name="searchBox"
        placeholder="Search for characters"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
