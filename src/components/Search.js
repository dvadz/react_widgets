import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input value={term} className='input'></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=canada
