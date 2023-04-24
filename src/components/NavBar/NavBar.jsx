import React from 'react';
import "./NavBar.css";
//ReactRouterDom
import { NavLink } from 'react-router-dom';
//CartWidget
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className="container">
    <nav className="nav">
       <div className="nav_name">
          <NavLink className="link" to='/'>E-Commerce</NavLink>
       </div>
       <ul className="nav_links">
          <li>
            <NavLink className="link" to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink className="link" to='/categoria/hoodies'>Hoodies</NavLink>
          </li>
          <li>
             <NavLink className="link" to='/categoria/pantalones'>Pantalones</NavLink>
          </li>
          <li>
             <NavLink className="link" to='/categoria/sweaters'>Sweaters</NavLink>
          </li>
          <li>
             <NavLink className="link" to='/cart'>
                <CartWidget />
             </NavLink>
          </li>
       </ul>
    </nav>
 </div>
  );
}

export default NavBar;