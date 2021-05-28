import React, { Component } from 'react'


export default class MenuItemCard extends Component {
  render() {
    const { menuItem } = this.props
    return (
      <div
        className="menu-item"
        onClick={() => this.props.showItem(chosenItem)}>
        <img
          style={{ display: 'block' }}
          src={menuItem.img}
          alt={menuItem.name}
        />
        <h3>{menuItem.name}</h3>
      </div>
    )
  }
}