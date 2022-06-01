import React from "react"

function Search({searchTerm, onChangeSearch}) {

  function handleChange(event){
    return onChangeSearch(event.target.value)
  }

  return (
      <div className="searchbar">
            <label htmlFor="search">Search Animals:</label>
            <input width="500"
              type="text"
              id="search"
              placeholder="Type a name to search..."
              value={searchTerm}
              onChange={handleChange}
          />
      </div>
    );
  }
  
  export default Search;