import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => {

return (
  <Card>
    
    <Card.Content  key={props.id}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.films}</span>
      </Card.Meta>
      <Card.Description>
        {props.homeworld}
      </Card.Description>
    </Card.Content>
    
  </Card>
)
}
export default CardExampleCard