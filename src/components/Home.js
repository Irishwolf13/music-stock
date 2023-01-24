import Card from './Card.js'

function Home({ rawData }) {
    const displayItems = rawData.map(item => (
      <Card
        key={item.id} 
        genre={item.genre}
        image_url={item.image_url}
      />
    ))
    

  return(
    <div className="container">
      {displayItems}
    </div>
  )
}

export default Home;