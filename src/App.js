import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';


// Always put the Router in app, you could put it in index, but that's normally
//where redux goes. Redux owns index, Router owns App.

class App extends Component {
  render() { 
    //the router goes around EVERYTHING that it needs to control
    return ( 
      <Router>
        <Route path='/' component={Home} />
        <Route path='/' component={About} />
        <h1>WOW DUDE</h1>
      </Router>
     )
  }
}
 

export default App;
