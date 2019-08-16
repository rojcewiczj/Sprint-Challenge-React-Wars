import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Grid, Image } from 'semantic-ui-react'
import CardExampleCard from "./Card"
const GridExampleDividedNumber = () => {

 const [characters, setCharacters] =useState([]);
 useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
          console.log(response.data.results);
        
      });
  }, []);



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