import React from 'react';
import './App.css';
import PatternContainer from './PatternContainer/PatternContainer';
import Registration from './Registration/Registration';

class App extends React.Component {
  render(){
    return(
      <div>
        <Registration />
        <PatternContainer />
      </div>
    )
  }
}

export default App;
