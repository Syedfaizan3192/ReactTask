import React, { Component, useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="search">
      <FormControl
        type="text"
        placeholder="Search Here..."
        className="mr-sm-2 mb-5 mt-5"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
