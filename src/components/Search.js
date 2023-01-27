
import React from "react";
import Card from './Card'

function Search({myMoney, search, handleSearch, rawData, handleArtistClicked, handleMoreInfo}) {

  const displayItems = rawData.map(item => (
    <Card
      key={item.id}
      trackName={item.name}
      artistName={item.artist_names[0]}
      id={item.id} 
      genre={item.genre}
      // preview={item.preview_url}
      image_url={item.image_url}
      popularity={item.spotify_popularity}
      handleArtistClicked={handleArtistClicked}
      handleMoreInfo={handleMoreInfo}
      myMoney={myMoney}
  />
  ))

  return (
    <div className="searchContainer">
      <div className="searchMe">Search</div>
      <input className='search-name'value={search} onChange={handleSearch}/>
      <button className='searchButton'>Search</button>
      <div className="container">{displayItems}</div>
    </div>
  );
}

export default Search;