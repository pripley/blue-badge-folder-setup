import React, { useState } from "react";
import NytResults from "./NytResults";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; // assigns endpoint url variable baseURL
const key = "YnuV2OJtyK5g9DyUBDIzszmLEGPxOFA3"; // Assigns API key to variable key

const NytApp = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
    url = startDate ? url + `&begin_date=${startDate}` : url;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    setPageNumber(0);
    fetchResults();
    event.preventDefault();
  };

  const changePageNumber = (event, direction) => {
    event.preventDefault();
    if (direction === "down") {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
        fetchResults();
      }
    }
    if (direction === "up") {
      setPageNumber(pageNumber + 1);
      fetchResults();
    }
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Enter a single search term (required) : </span>
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <br />
          <span>Enter a start date:</span>
          <input
            type="date"
            name="endDate"
            pattern="[0-9]{8}"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <span>Enter an end date:</span>
          <input
            type="date"
            name="endDate"
            pattern="[0-9]{8}"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <button className="submit">Submit search</button>
        </form>
        {results.length > 0 ? (
          <NytResults results={results} changePage={changePageNumber} />
        ) : null}
      </div>
    </div>
  );
};

export default NytApp;
