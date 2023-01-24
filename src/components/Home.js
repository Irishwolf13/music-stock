import Card from './Card.js'

function Home({ rawData }) {
  const handleArtistClicked = (id) => {
    const myData = (rawData.find(item => item.id === id))
    fetch("http://localhost:7001/artists", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
    .then(res => res.json())                        
    .then(returnData => console.log(returnData)) 
  }
  
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
    
    
  return(
    <div className="container">
      {displayItems}
    </div>
  )
}

export default Home;