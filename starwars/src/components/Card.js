import React, {useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const CardExampleCard = (props) => {
const [card, setCardClass] = useState('card-see');
return (
   <button className={card}  onMouseOver={() => setCardClass("card-see")} onMouseLeave= {()=> setCardClass("card-none")}>
  <Card >
     
    <Card.Content  key={props.id}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'> Height: {props.films}</span>
      </Card.Meta>
      <Card.Description>
        Mass: {props.homeworld}
      </Card.Description>
    </Card.Content>
    
  </Card>
  </button>
)
}
export default CardExampleCard