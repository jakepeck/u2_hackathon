import React, { Component } from 'react';
import MenuItemCard from '../components/MenuItemCard';

export default class Order extends Component {
  render() {
    const { order, submitOrder } = this.props
    const orderList = order.map((item, index) => (
      <MenuItemCard key={index} menuItem={item} />
    ))
    console.log(order)
    return (
      <div className="page">

        Order

        {orderList}
        <button onClick={submitOrder}>Submit Order</button>

      </div>
    );
  }
}