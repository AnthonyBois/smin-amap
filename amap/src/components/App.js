import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Veggie from './Veggie';
import sampleVeggies from '../sample-veggies';

import { Card, CardBody } from 'reactstrap';


class App extends React.Component {

  constructor() {
    super();

    this.addVeggie = this.addVeggie.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addOrder = this.addOrder.bind(this);

    this.state = {
      veggies: {},
      order: {}
    }
  }

 

  addVeggie(veggie) {
    const veggies = {...this.state.veggies};
    const timestamp = Date.now();
    veggies[`veggie-${timestamp}`] = veggie;
    this.setState({ veggies })
  }

  addOrder(order) {
    const orders = {...this.state.orders}
    Object
    .keys(orders)
    .map(function (key){
      if (orders[key].name == order.name && orders[key].nombreProduits < orders[key].nombreProduitDispo){
        order.nombreProduits = orders[key].nombreProduits + 1
        order.prixFinal = (orders[key].price * (orders[key].nombreProduits + 1))
        }
        if (orders[key].name == order.name && orders[key].nombreProduits >= orders[key].nombreProduitDispo){
          order.nombreProduits = orders[key].nombreProduits
          order.prixFinal = (orders[key].price * (orders[key].nombreProduits))
        }
        

    })
    orders[order.name] = order
    this.setState({ orders })
    var veggie = {orders}
    localStorage.setItem('orders', JSON.stringify(veggie));
  }
  
  componentWillMount(){

    if ((typeof JSON.parse(localStorage.getItem('orders')) !== "undefined") 
      && (JSON.parse(localStorage.getItem('orders')) !== null)){
      this.setState({
        orders: JSON.parse(localStorage.getItem('orders')).orders
      })
    } 
    else {
      this.setState({
        orders: {}
      })
      
    }
}


  loadSamples() {
    this.setState({
      veggies: sampleVeggies
    });
  }


  render() {
    return (
      <div className="amap">
        <Card>
          <CardBody>
            <div className="menu">
              <Header tagline="Des bons legumes" />
              <ul className="list-of-veggies">
              {
                Object
                  .keys(this.state.veggies)
                  .map(key => <Veggie addOrder={this.addOrder} key={this.state.veggies[key].name} details={this.state.veggies[key]}/>)
              }
              </ul>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Order addOrder={this.addOrder} details={this.state.orders}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default App;
