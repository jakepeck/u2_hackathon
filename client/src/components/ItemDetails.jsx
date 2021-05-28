import React, { Component } from 'react'

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: null
    }
  }

  componentDidMount() {
    let chosenItem = this.props.menuList.find((item) => item.id === parseInt(this.props.match.params.id))
    this.setState({ menuItem: chosenItem })
  }
  // functions here

  render() {
    return menuItem ? (
      <div>
        <img src='#' />
        <h1>{menuItem.name}</h1>
        <h3>Price: ${menuItem.price}</h3>
        <div>{menuItem.description}</div>
      </div>
    ) : null;
  }
}