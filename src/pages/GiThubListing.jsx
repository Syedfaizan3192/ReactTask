import React, { Component } from "react";
import List from "../components/List";
import Search from "../components/Search";

const GiThubListing = () => {
  return (
    <div className="github-listing container">
      <Search />
      <List />
    </div>
  );
};

export default GiThubListing;
