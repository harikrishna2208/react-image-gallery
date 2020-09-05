import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="SearchBar">
      <form onSubmit={onSubmit}>
        <input
          className="Inputbtn"
          type="text"
          placeholder="type..."
          aria-label="Search"
          onChange={(e) => setText(e.target.value)}
        />{" "}
        {"   "}
        <button type="submit" className="mr-auto">
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
