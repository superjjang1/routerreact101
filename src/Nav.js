import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props){
    return(
        //in react router, we don't use <a> use Link components
        //Link is the new A
        <div className="nav">
            <Link to='/'>HomePage</Link>
            <Link to='/about'>About Page</Link>
            <Link to='/superHero'>SuperHeroPage</Link>
        </div>
    )
}

export default Nav;