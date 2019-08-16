import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const StarshipCard = (props) => {

return (
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
)
}
export default StarshipCard