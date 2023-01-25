import React from 'react';

function DisplayPage({ currentSong }) {
  console.log(currentSong)
  return(
    <div className="infoContainer">
      <p>{currentSong.name}</p>
      <p>is</p>
      <p>here</p>
    </div>
  )
}

export default DisplayPage;