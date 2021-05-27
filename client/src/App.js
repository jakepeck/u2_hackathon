import React, {Component} from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'
import Desserts from './pages/Desserts'
import Drinks from './pages/Drinks'

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
      <div className="App" style={{ color: 'white'}}>
        <header>
          <Nav/>
        </header>
        <main>
          {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Lunch" component={Lunch}/>
            <Route path="/Dinner" component={Dinner}/>
            <Route path="/Desserts" component={Desserts}/>
            <Route path="/Drinks" component={Drinks}/>
          </Switch> */}
        </main>
      </div>
    );

  }
}

