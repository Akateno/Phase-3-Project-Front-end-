import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search({ searchTerm, onChangeSearch }) {
  function handleChange(event) {
    return onChangeSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Available Dogs:</label>
      {/* <input
          className="searchTerm"
          width="500"
          type="text"
          id="search"
          placeholder="Choose your doggo..."
          value={searchTerm}
          onChange={handleChange}
        /> */}
      <TextField
        id="filled-search"
        type="search"
        variant="filled"
        className="searchTerm"
        width="500"
        type="text"
        id="search"
        placeholder="Choose your doggo..."
        value={searchTerm}
        onChange={handleChange}
        sx={{ padding: "30px" }}
      />
    </div>
  );
}

export default Search;
