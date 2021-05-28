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
      menu: [
        {
          name: 'chicken parm',
          description: 'chicken with parmesan and noodles i think',
          type: 'dinner',
          price: 20.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lifealittlebrighter.com%2Fwp-content%2Fuploads%2F2016%2F08%2F4-Ingredient-Chicken-Parmesan-2.jpg&f=1&nofb=1'
        },
        {
          name: 'mac and cheese',
          description: 'macaroni pasta with cheese sauce',
          type: 'dinner',
          price: 25.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jessicagavin.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fspoonful-baked-macaroni-and-cheese.jpg&f=1&nofb=1'
        },
        {
          name: 'chicken parm',
          description: 'chicken with parmesan and noodles i think',
          type: 'dinner',
          price: 20.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lifealittlebrighter.com%2Fwp-content%2Fuploads%2F2016%2F08%2F4-Ingredient-Chicken-Parmesan-2.jpg&f=1&nofb=1'
        },
        {
          name: 'mac and cheese',
          description: 'macaroni pasta with cheese sauce',
          type: 'dinner',
          price: 25.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jessicagavin.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fspoonful-baked-macaroni-and-cheese.jpg&f=1&nofb=1'
        },
        {
          name: 'grilled cheese',
          description: 'two slices of bread hugging cheese',
          type: 'lunch',
          price: 14.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fshutterstock_645742051.jpg&f=1&nofb=1'
        },
        {
          name: 'tomato soup',
          description: 'salty red fruit water',
          type: 'lunch',
          price: 9.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chelseasmessyapron.com%2Fwp-content%2Fuploads%2F2014%2F02%2FBest-Tomato-Basil-Soup5.jpg&f=1&nofb=1'
        },
        {
          name: 'grilled cheese',
          description: 'two slices of bread hugging cheese',
          type: 'lunch',
          price: 14.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fshutterstock_645742051.jpg&f=1&nofb=1'
        },
        {
        name: 'tomato soup',
        description: 'salty red fruit water',
        type: 'lunch',
        price: 9.99,
        img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chelseasmessyapron.com%2Fwp-content%2Fuploads%2F2014%2F02%2FBest-Tomato-Basil-Soup5.jpg&f=1&nofb=1'
        },
        {
          name: 'cocktail 1',
          description: 'it alcoholic and fruity',
          type: 'drink',
          price: 19.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmixthatdrink.com%2Fwp-content%2Fuploads%2F2009%2F05%2Fcosmopolitan-cocktail-2-735x735.jpg&f=1&nofb=1'
        },
        {
          name: 'cocktail 2',
          description: 'it alcoholic and fruity',
          type: 'drink',
          price: 20.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.liquorista.com%2Fwp-content%2Fuploads%2F2019%2F03%2FPenicillin-Cocktail_1.jpg&f=1&nofb=1'
        },
        {
          name: 'cocktail 3',
          description: 'it alcoholic and fruity',
          type: 'drink',
          price: 21.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thismamacooks.com%2Fimages%2F2019%2F05%2FPeach-Whiskey-Cocktail-5a-1.jpg&f=1&nofb=1'
        },
        {
          name: 'cocktail 4',
          description: 'it alcoholic and fruity',
          type: 'drink',
          price: 22.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Firepo.primecp.com%2F2018%2F06%2F378425%2FBlue-Lagoon-Cocktail_ExtraLarge1000_ID-2811561.jpg%3Fv%3D2811561&f=1&nofb=1'
        },
        {
          name: 'kalamari',
          description: 'little squids chewy and fried',
          type: 'app',
          price: 19.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.greekboston.com%2Fwp-content%2Fuploads%2F2014%2F07%2F493955193.jpg&f=1&nofb=1'
        },
        {
          name: 'onion rings',
          description: 'yummy salty chompy circles',
          type: 'app',
          price: 16.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.summitmedia-digital.com%2Fcosmo%2Fimages%2F2020%2F06%2F20%2Fhow-to-make-onion-rings-1592642400.jpg&f=1&nofb=1'
        },
        {
          name: 'kalamari',
          description: 'little squids chewy and fried',
          type: 'app',
          price: 19.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.greekboston.com%2Fwp-content%2Fuploads%2F2014%2F07%2F493955193.jpg&f=1&nofb=1'
        },
        {
          name: 'onion rings',
          description: 'yummy salty chompy circles',
          type: 'app',
          price: 16.00,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.summitmedia-digital.com%2Fcosmo%2Fimages%2F2020%2F06%2F20%2Fhow-to-make-onion-rings-1592642400.jpg&f=1&nofb=1'
        },
        {
          name: 'chocolate cake',
          description: 'delicious, moist, not a lie',
          type: 'dessert',
          price: 9.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bijouxandbits.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fportal-cake-10.jpg&f=1&nofb=1'
        },
        {
          name: 'chocolate cake',
          description: 'delicious, moist, not a lie',
          type: 'dessert',
          price: 9.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bijouxandbits.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fportal-cake-10.jpg&f=1&nofb=1'
        },
        {
          name: 'chocolate cake',
          description: 'delicious, moist, not a lie',
          type: 'dessert',
          price: 9.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bijouxandbits.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fportal-cake-10.jpg&f=1&nofb=1'
        },
        {
          name: 'chocolate cake',
          description: 'delicious, moist, not a lie',
          type: 'dessert',
          price: 9.99,
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bijouxandbits.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fportal-cake-10.jpg&f=1&nofb=1'
        },
      ],
      selectedItem: null // Will be itemID once state sets
    }
  }

  // async componentDidMount() {
  //   const res = await axios.get(`${BASE_url}/testAPI`, axiosConfig)
  //   this.setState({ menu: res.data.results })

  // }

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

