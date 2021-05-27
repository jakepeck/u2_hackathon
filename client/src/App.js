import React, {Component} from 'react';
import './styles/App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenPage: null, // Will point to displaying a page once state sets
    }
  }

  // functions go here

  render() {
    return (
      <div className="App">
       
  // visible app stuff goes here
  // consider conditional rendering
       
      </div>
    );

  }
}

