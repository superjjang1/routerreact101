import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import SuperHero from './SuperHero';


// Always put the Router in app, you could put it in index, but that's normally
//where redux goes. Redux owns index, Router owns App.

class App extends Component {
  render() { 
    //the router goes around EVERYTHING that it needs to control
    
    return ( 
      <Router>
        <Route path='/' component={Nav} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/superHero' render={()=>{
          return( 
            <div>
          <SuperHero heroName="PowerFulMeme aka Jon Joe aka Manga Manga aka I'm gonna dumpster ints in Trash League"/>
          <SuperHero heroName="Bizzaro Joe, where nothing makes sense"/>
          </div>)}
        }/>
        
        <h1>WOW DUDE</h1>
      </Router>
     )
  }
}
 

export default App;
