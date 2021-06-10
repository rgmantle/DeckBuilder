import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
  DeckList,
  SearchBar,
  SearchResults
} from './components';

import {
  fetchCards,
} from './api';


const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div id="app">
      <SearchBar setResults={ setResults } />
      <SearchResults results={ results }/>
      <DeckList />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);