
import React from 'react';

import Card from './Card'

const SearchResults = ({ results }) => {
  return (
    <div id="results">
      <h3>Here's what we pulled up ({ results.length } results):</h3>
      { results.map (result => (
        <Card key={ result.id } { ...result } />
      ))
      }
    </div>
  );
}

export default SearchResults;