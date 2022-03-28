import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  const onInputChange = (term) => {
    setTerm(term);
  };

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            className='input'
            onChange={(event) => {
              onInputChange(event.target.value);
            }}></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=canada
