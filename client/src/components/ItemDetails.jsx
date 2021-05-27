import React, { Component } from 'react'

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: props.chosenItem,
      itemDetails: null
    }
  }

  // functions here

  render() {
    return (
      <div>

      </div>
    )
  }
}