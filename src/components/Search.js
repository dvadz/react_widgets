import React, { useState } from "react";

const Search = () => {
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input className='input'></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=canada
