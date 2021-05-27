import React, {Component} from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import { BASE_URL, axiosConfig } from './globals'
import Nav from './components/Nav'
import Home from './pages/Home'
import Lunch from './pages/Lunch'
import Dinner from './pages/Dinner'
import Dessert from './pages/Dessert'
import Drinks from './pages/Drinks'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [],
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/#`, axiosConfig)
    // console.log(res)
    this.setState({ menu: res.data.results })

  }



  render() {
    return (
      <div className="App" style={{ color: 'white'}}>
        <header>
          <Nav/>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props} menu={this.state.menu} />}/>
            <Route path="/Lunch" component={(props) => <Lunch {...props} menu={this.state.menu} />}/>
            <Route path="/Dinner" component={(props) => <Dinner {...props} menu={this.state.menu} />}/>
            <Route path="/Dessert" component={(props) => <Dessert {...props} menu={this.state.menu} />}/>
            <Route path="/Drinks" component={(props) => <Drinks {...props} menu={this.state.menu} />}/>
          </Switch>
        </main>
      </div>
    );

  }
}

