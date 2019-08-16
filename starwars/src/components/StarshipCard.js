import React, {useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const StarshipCard = (props) => {
    const [card3, setCardClass3] = useState('card-see');
return (
    <button className={card3}  onMouseOver={() => setCardClass3("card-see")} onMouseLeave= {()=> setCardClass3("card-none")}>
  <Card>
    
    <Card.Content  key={props.id}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'> Model: {props.films}</span>
      </Card.Meta>
      <Card.Description>
        Cost: {props.homeworld}
      </Card.Description>
    </Card.Content>
    
  </Card>
  </button>
)
}
export default StarshipCard