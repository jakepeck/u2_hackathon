import React, { Component } from 'react'
import MenuItemCard from './MenuItemCard'

export default class MenuList extends Component {

  showItem = (menuItem) => {
    this.props.history.push(`/??????/${menuItem.id}`)
  }

  render() {
    const { menu } = this.props

    const menuList = menu.map(menuItem => {
      return <MenuItemCard
        key={`${menuItem.id}${menuItem.name}`}
        showItem={this.showItem}
        menuItem={menuItem}
      />
    });

    return (
      <div>
        { menuList}
      </div >
    )
  }
}