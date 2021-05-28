import React, {Component} from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import { BASE_URL, axiosConfig } from './globals'
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
      selectedItem: null // Will be itemID once state sets
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/#`, axiosConfig)
    // console.log(res)
    this.setState({ menu: res.data.results })

  }

  chooseItem = (itemID) => {
    this.setState({
      selectedItem: itemID
    })
  }


  render() {
    return (
      <div className="App" style={{ color: 'white'}}>
        <header>
          <Nav/>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={(props) => 
              <Order {...props} 
                menu={this.state.menu} 
                selectedItem={this.state.selectedItem}
              />
            }/>
            <Route path="/Appetizers" component={(props) => 
              <Apps {...props} 
                menu={this.state.menu} 
                selectedItem={this.state.selectedItem} 
              />
            }/>
            <Route path="/Dinner" component={(props) => 
              <Dinner {...props} 
                menu={this.state.menu} 
                selectedItem={this.state.selectedItem} 
              />
            }/>
            <Route path="/Dessert" component={(props) => 
              <Dessert {...props} 
                menu={this.state.menu} 
               selectedItem={this.state.selectedItem} 
              />
            }/>
            <Route path="/Drinks" component={(props) => 
              <Drinks {...props} 
                menu={this.state.menu} 
                selectedItem={this.state.selectedItem} 
              />
            }/>
          </Switch>
        </main>
      </div>
    );

  }
}

