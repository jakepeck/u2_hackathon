import React, { Component } from 'react';
import MenuList from '../components/MenuList';

export default class Apps extends Component {
  render() {
    let fullMenu = this.props.menu
    let menu = [];
    for (let i = 0; i < fullMenu.length; i++) {
      if (fullMenu[i].type === 'app') {
        menu.push(fullMenu[i])
      }
    }
    return (
      <div className="page">

        <MenuList menu={this.menu} />

      </div>
    );
  }
}