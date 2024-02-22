import React, { Component } from "react";
import List from "../components/List";
import Search from "../components/Search";
import { useState } from "react";

const GiThubListing = () => {
  const [data, setData] = useState([]);
  const getSearchData = () => {};
  return (
    <div className="github-listing container">
      <Search setData={setData} />
      <List data={data} />
    </div>
  );
};

export default GiThubListing;
