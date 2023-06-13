import React from 'react';
import Search from './Search';

const SearchPage = () => {
  const searchResults = [];

  return (
    <div>
      <Search searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
