import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PlanetCard = (props) => {

return (
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
)
}
export default PlanetCard