import React, { Component } from 'react'


export default class MenuItemCard extends Component {
  render() {
    const { menuItem } = this.props
    return (
      <div
        className="menu-item">
        {/* <img
          src={menuItem.image}
          alt={menuItem.name}
        /> */}
        <h3>{menuItem.name}<span className="price">${menuItem.price}</span></h3>
        <div className="description">{menuItem.description}</div>
        <button /*onClick=
          {() => this.props.addToOrder(menuItem)}*/>Add to Order</button>
      </div >
    )
  }
}