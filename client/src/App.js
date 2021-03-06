import React, { Component } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'
import Nav from './components/Nav'
import Order from './pages/Order'
import Apps from './pages/Apps'
import Dinner from './pages/Dinner'
import Dessert from './pages/Dessert'
import Drinks from './pages/Drinks'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [],
      appMenu: [],
      dinnerMenu: [],
      dessertMenu: [],
      drinksMenu: [],
      order: []
    }
  }

  addtoOrder = (menuItem) => {
    this.setState({ order: [menuItem, ...this.state.order] })
  }

  submitOrder = () => {
    this.setState({ order: [] })
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/menuitems`)
    this.setState({ menu: res.data.menuitems })
  }

  chooseItem = (itemID) => {
    this.setState({
      selectedItem: itemID
    })
  }

  render() {
    for (let i = 0; i < this.state.menu.length; i++) {
      // let imagePath = this.state.menu[i].image;
      // let imageSrc = `../images/${imagePath}`
      // this.state.menu[i].image = imageSrc
      switch (this.state.menu[i].type) {
        case 'app':
          this.state.appMenu.push(this.state.menu[i])
          break
        case 'dessert':
          this.state.dessertMenu.push(this.state.menu[i])
          break
        case 'dinner':
          this.state.dinnerMenu.push(this.state.menu[i])
          break
        case 'drink':
          this.state.drinksMenu.push(this.state.menu[i])
          break
        default:
      }
    }

    return (
      <div className="App" style={{ color: 'white' }}>
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <Order
                  {...props}
                  menu={this.state.menu}
                  selectedItem={this.state.selectedItem}
                  submitOrder={this.submitOrder}
                  order={this.state.order}
                />
              )}
            />
            <Route
              path="/Appetizers"
              component={(props) => (
                <Apps
                  {...props}
                  menu={this.state.appMenu}
                  selectedItem={this.state.selectedItem}
                  addtoOrder={this.addtoOrder}
                />
              )}
            />
            <Route
              path="/Dinner"
              component={(props) => (
                <Dinner
                  {...props}
                  menu={this.state.dinnerMenu}
                  selectedItem={this.state.selectedItem}
                  addtoOrder={this.addtoOrder}
                />
              )}
            />
            <Route
              path="/Dessert"
              component={(props) => (
                <Dessert
                  {...props}
                  menu={this.state.dessertMenu}
                  selectedItem={this.state.selectedItem}
                  addtoOrder={this.addtoOrder}
                />
              )}
            />
            <Route
              path="/Drinks"
              component={(props) => (
                <Drinks
                  {...props}
                  menu={this.state.drinksMenu}
                  selectedItem={this.state.selectedItem}
                  addtoOrder={this.addtoOrder}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
