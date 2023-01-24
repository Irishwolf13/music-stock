
import React from "react";
import Card from './Card'

function Search({search, handleSearch, rawData, handleArtistClicked}) {

  const displayItems = rawData.map(item => (
    <Card
    key={item.id}
    id={item.id} 
    genre={item.genre}
    image_url={item.image_url}
    rawData={rawData}
    handleArtistClicked={handleArtistClicked}
  />
  ))

  return (
    <div>
      <div>Search</div>
      <input className='search-name'value={search} onChange={handleSearch}/>
      <button>Search</button>
      {displayItems}
      </div>
  );
}

export default Search;