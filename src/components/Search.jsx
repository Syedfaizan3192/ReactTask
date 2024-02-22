import React, { Component, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { fetchUserById, fetchUsers, searchUsers } from "../redux/UserSlice";
import { useEffect } from "react";

const Search = ({ data, setData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [IsSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const searchHN = async () => {
      let results = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        console.log("");

        const data = await dispatch(searchUsers(debouncedSearchTerm));
        setData(data);
        console.log(data, "uiui");
        results = data?.hits || [];
      }

      setIsSearching(false);
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <div className="search">
      <FormControl
        type="text"
        placeholder="Search Here..."
        className="mr-sm-2 mb-5 mt-5"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
