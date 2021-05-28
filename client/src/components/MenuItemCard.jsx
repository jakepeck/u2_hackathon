import React, { Component } from 'react'


export default class MenuItemCard extends Component {
  render() {
    const { menuItem } = this.props
    return (
      <div
        className="menu-item"
        onClick={() => this.props.showItem(menuItem)}>
        <img
          src={menuItem.img}
          alt={menuItem.name}
          width='200'
        />
        <h4>{menuItem.name}</h4>
        <hr />
      </div>
    )
  }
}