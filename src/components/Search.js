import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const onInputChange = (term) => {
    setTerm(term);
  };

  useEffect(() => {
    if (!term) return;
    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(response.data.query.search);
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item'>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

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
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
