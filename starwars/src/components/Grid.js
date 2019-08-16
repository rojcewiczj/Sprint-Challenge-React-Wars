import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Grid, Image } from 'semantic-ui-react'
import CardExampleCard from "./Card"
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";
const GridExampleDividedNumber = () => {

 const [characters, setCharacters] =useState([]);
 const [planets, setPlanets] = useState([]);
 const [starships, setStarships] = useState([]);
 useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
          console.log(response.data.results);
          const characters = response.data.results;
          setCharacters(characters);
        
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/planets/`, {
        params: {}
      })
      .then(response => {
          console.log(response.data.results);
          const planets= response.data.results;
          setPlanets(planets);
        
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/starships/`, {
        params: {}
      })
      .then(response => {
          console.log(response.data.results);
          const starships= response.data.results;
          setStarships(starships);
        
      });
  }, []);

return (
   
  <Grid  className= "Grid" columns={3} divided>
    <Grid.Row>
      <Grid.Column className="Column">
      {characters.map(character => {
              return (
                  <CardExampleCard key={character.id}
                  name={character.name}
                  films={character.height}
                  homeworld={character.mass} />
              )
          })}
       
      </Grid.Column>
  
      <Grid.Column className = "Column">
        {planets.map(character=> {
              return (
                  <PlanetCard key={character.id}
                  name={character.name}
                  films={character.diameter}
                  homeworld={character.climate} />
              )
          })}
      </Grid.Column>
      <Grid.Column className = "Column">
      {starships.map(character => {
              return (
                  <StarshipCard key={character.id}
                  name={character.name}
                  films={character.model}
                  homeworld={character.cost_in_credits} />
              )
          })}
       
      </Grid.Column>
    </Grid.Row>
    

  </Grid>
  
  
)
}

export default GridExampleDividedNumber