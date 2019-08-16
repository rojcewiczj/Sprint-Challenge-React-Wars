import React,{useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PlanetCard = (props) => {
    const [card2, setCardClass2] = useState('card-see');
return (
    <button className={card2}  onMouseOver={() => setCardClass2("card-see")} onMouseLeave= {()=> setCardClass2("card-none")}>
  <Card className="card">
    
    <Card.Content  key={props.id}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'> diameter: {props.films}</span>
      </Card.Meta>
      <Card.Description>
        climate: {props.homeworld}
      </Card.Description>
    </Card.Content>
    
  </Card>
  </button>
)
}
export default PlanetCard