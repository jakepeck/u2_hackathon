import React, { Component } from 'react'
import ItemDetails from './ItemDetails'


export default class MenuItemCard extends Component {
  render() {
    const { } = this.props
    return (
      <div className="menu-item" onClick={() => this.props.showItem(chosenItem)}>
        <img style={{ display: 'block' }} src={menuItem.img} alt={menuItem.name} />
        <h3>{menuItem.name}</h3>
      </div>
    )
  }
}