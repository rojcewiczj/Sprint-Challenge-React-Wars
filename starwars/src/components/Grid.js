import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CardExampleCard from "./Card"
const GridExampleDividedNumber = () => {
    
 const [characters, setCharacters] =useState([]);




return (
   
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <CardExampleCard />
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
}

export default GridExampleDividedNumber