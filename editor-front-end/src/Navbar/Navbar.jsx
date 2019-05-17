import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/entries'>Entries</Link></li>
      </ul>
    </header>
  )
}

export default Navbar;
