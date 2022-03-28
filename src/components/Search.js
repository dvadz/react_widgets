import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [results, setResults] = useState([]);

  const onInputChange = (term) => {
    setTerm(term);
  };

  useEffect(() => {
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
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target='_blank'>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
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
