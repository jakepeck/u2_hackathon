import React, { Component } from 'react';
import MenuList from '../components/MenuList'

export default class Dinner extends Component {
  render() {
    return (
      <div className="page">

        <MenuList menu={this.props.menu} addtoOrder={this.props.addtoOrder} />

      </div>
    );
  }
}