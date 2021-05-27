import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="topper">
        <h4>Big Munch</h4>
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/lunch">Lunch</NavLink>
          <NavLink to="/dinner">Dinner</NavLink>
          <NavLink to="/dessert">Dessert</NavLink>
          <NavLink to="/drinks">Drinks</NavLink>
        </div>
      </nav>
    );
  }
}