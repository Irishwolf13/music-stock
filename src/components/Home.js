import Card from './Card.js';

function Home({ rawData }) {
    const displayData = rawData.map(item => (
      <Card 
        name={item.name}
        cost={item.hp}
        image={item.sprites.front}
        key={item.id}
      />
    ))
    

  return(
    <div>
      <title> Home </title>
    </div>
  )
}

export default Home;