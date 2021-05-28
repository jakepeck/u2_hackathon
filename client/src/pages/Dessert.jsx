import React, { Component } from 'react';
import MenuList from '../components/MenuList'

export default class Dessert extends Component {
  render() {
    return (
      <div className="page">

        <MenuList menu={this.props.menu} />

      </div>
    );
  }
}