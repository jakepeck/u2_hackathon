import React, { Component } from 'react'


export default class MenuItemCard extends Component {
  render() {
    const { menuItem } = this.props

    return (
      <div
        className="menu-item"
        /*onClick={() => this.props.showItem(menuItem)}*/>
        <img
          src={menuItem.image}
          alt={menuItem.name}
        />
        <h4>{menuItem.name}</h4>
        <h3>Price: ${menuItem.price}</h3>
        <div className="description">{menuItem.description}</div>
        <button></button>
      </div>
    )
  }
}