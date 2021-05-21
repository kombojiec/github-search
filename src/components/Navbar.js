import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {

  return(
    <nav className="nav">
      <div className="nav__logo">Github Search</div>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" exact className="nav__link">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;