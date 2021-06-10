
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div id="results">
      <h3>Here's what we pulled up ({ results.length } results):</h3>
    </div>
  );
}

export default SearchResults;