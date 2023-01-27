import React from 'react';

function DisplayPage({ currentSong }) {
  
  let artistNames = ''
  let releaseDate = ''
  if (currentSong.artist_names !== undefined) {
    artistNames = currentSong.artist_names.map(item => (
    <div key={item}>{item}</div>
    ))
    releaseDate = currentSong.album[0].release_date
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
      <p>Release Date: {releaseDate}</p>
      <p>Days on Billboard Chart: {currentSong.time_on_chart}</p>
      <p>Highest Chart Rank: {currentSong.peak_rank}</p>
      <p>{currentSong.track_genre}</p>
    </div>
  )
}

export default DisplayPage;