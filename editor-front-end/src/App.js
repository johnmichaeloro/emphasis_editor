import React from 'react';
import EntryContainer from 'EntryContainer/EntryContainer';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const 404Error = () => {
  return(
    <div>
      404 Error
    </div>
  )
}

function App(){
  return(
    <div>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/entries' component={EntryContainer} />
          <Route component={My404} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
