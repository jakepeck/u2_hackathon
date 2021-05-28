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

        <div className="welcome">
          <p>Thank you for choosing Truth in Wine for your dining experience today. Mouthwatering authentic Italian flavors in a sleek and contemporary environment are yours to enjoy.</p>
          <p>Fill your order using this app and submit when you're ready. We will bring your meal out to you within 15-30 minutes.</p></div>


        {orderList}
        <button onClick={submitOrder}>Submit Order</button>

      </div>
    );
  }
}