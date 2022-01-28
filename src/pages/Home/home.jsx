import Card from '../../components/Card/card'

const cardArray = [
  'Titre de la location #1',
  'Titre de la location #2',
  'Titre de la location #3',
  'Titre de la location #4',
  'Titre de la location #5',
  'Titre de la location #6',
]

function Home() {
  return (
    <div>
      <div>
        <h1>Chez vous partout et ailleurs (futur composant banner) </h1>
      </div>
      <div>
        {cardArray.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </div>
  )
}

export default Home
