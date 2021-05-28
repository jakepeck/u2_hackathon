import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo_cut from '../images/logo_cut.png'

export default class Nav extends Component {
  render() {
    return (
      <nav className="topper">
        <img src={logo_cut} alt="Truth in Wine" width="160" />
        <div className="navbar">
          <NavLink to="/">Order</NavLink>
          <NavLink to="/appetizers">Appetizers</NavLink>
          <NavLink to="/dinner">Dinner</NavLink>
          <NavLink to="/dessert">Dessert</NavLink>
          <NavLink to="/drinks">Drinks</NavLink>
        </div>
      </nav>
    );
  }
}