import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo_cut from '../images/logo_cut.png'

export default class Nav extends Component {
  render() {
    return (
      <nav className="topper">
        <img src={logo_cut} alt="Truth in Wine" width="160" />
        <div className="navbar">
          <NavLink to="/">Order<br /><span></span></NavLink>
          <NavLink to="/appetizers">Appetizers<br /><span></span></NavLink>
          <NavLink to="/dinner">Dinner<br /><span></span></NavLink>
          <NavLink to="/dessert">Dessert<br /><span></span></NavLink>
          <NavLink to="/drinks">Drinks<br /><span></span></NavLink>
        </div>
      </nav>
    );
  }
}