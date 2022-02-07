import React, { useEffect, useState } from "react";

function App() {
  // store contents of search input in state
  const [searchInputText, setSearchInputText] = useState("");
  // store a debounced version of the search 
  // term in state (this only updates after 
  // the user stops typing) 
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchInputText(e.target.value);
  }

  // send fetch request after debounced term is updated
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURI(debouncedSearchTerm)}`)
      .then(res => res.json())
      .then(results => {
        setSearchResults(results.map(data => data.show))
      })
  }, [debouncedSearchTerm])

  // whenever search input text is update, update the debounced term on a timeout
  useEffect(() => {
    // ✅ save the timeoutID to a variable
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchInputText);
    }, 300)

    // ✅ return a cleanup function that will clean up the previously scheduled timeoutID
    // CODE HERE
    return function() {
      clearTimeout(timeoutId);
    }
  }, [searchInputText])

  return (
    <section>
      <h2>Search for your favorite show!</h2>
      <input
        type="text"
        onChange={handleSearchInputChange}
        value={searchInputText}
      />
      <p>searchInputText: {searchInputText}</p>
      <section style={{display: 'flex', flexWrap: 'wrap'}}>
        {searchResults.map(show => (
          <div style={{marginRight: '1em'}}>
            <img src={show.image&& show.image.medium} alt={show.name} />
            <p>{show.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default App;