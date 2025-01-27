import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import GridExampleDividedNumber from './components/Grid'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <h1 className="Header">React Wars</h1>
      
      <GridExampleDividedNumber />
    </div>
  );
}

export default App;
