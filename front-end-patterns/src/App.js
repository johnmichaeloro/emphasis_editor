import React from 'react';
import './App.css';
import PatternContainer from './PatternContainer/PatternContainer';
import {Router, Switch} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <p>Hello</p>
        <PatternContainer />
      </div>
    )
  }
}

export default App;
