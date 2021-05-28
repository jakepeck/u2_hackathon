import React, { Component } from 'react'
import MenuItemCard from './MenuItemCard'

export default class MenuList extends Component {

  // showItem = (menuItem) => {
  //   this.props.history.push(`/??????/${menuItem.id}`)
  // }

  render() {
    const menu = this.props.menu
    const menuList = menu.map((item, index) => {
      return <MenuItemCard
        key={index}
        // showItem={this.showItem}
        menuItem={item}
      />
    });

    return (
      <div className="menu-list">
        {menuList}
      </div>
    )
  }
}