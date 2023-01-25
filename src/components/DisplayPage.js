import React from 'react';

function DisplayPage({ currentSong }) {
  console.log(currentSong.artist_names)
  let artistNames = ''
  if (currentSong.artist_names !== undefined) {
    artistNames = currentSong.artist_names.map(item => (
    <div key={item}>{item}</div>
    ))
  } 

  let songWriters = ''
  if (currentSong.songwriter !== undefined) {
    songWriters = currentSong.songwriter.map(item => (
      <div key={item}>{item}</div>
    ))
  }

  return(
    <div className="infoContainer">
      <img className="displayArt" src={currentSong.image_url}></img>
      <p>{currentSong.name}</p>
      <div className='displayArtistNames'>Artists:{artistNames}</div>
      <div className='displayArtistNames'>Songwriters: {songWriters}</div>
      <p>Release Date: {currentSong.release_dates}</p>
      <p>{currentSong.track_genre}</p>
    </div>
  )
}

export default DisplayPage;