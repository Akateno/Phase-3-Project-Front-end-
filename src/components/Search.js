import React from "react"

function Search({searchTerm, onChangeSearch}) {

  function handleChange(event){
    return onChangeSearch(event.target.value)
  }

  return (
    
    <div className="wrap">
      <div className="searchbar">
            <label htmlFor="search">Search Dogs:</label>
            <input 
              className="searchTerm"
              width="500"
              type="text"
              id="search"
              placeholder="Choose your doggo..."
              value={searchTerm}
              onChange={handleChange}
          />
      </div>
      </div>
      
    );
  }
  
  export default Search;