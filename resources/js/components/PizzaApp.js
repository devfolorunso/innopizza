import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Pizza from './Pizza';

class PizzaApp extends Component {

  state = {
    order: [],
    orderTotal: 0,
    checkoutTotal: 0,
    postcode: ''
  }
  updatePostcode = (newPostcode) => {
    this.setState({
      postcode: newPostcode
    });
  }

  addToOrder = (pizza) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    const newTotal = this.state.orderTotal + Pizza.amount;

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }
  removeFromOrder = (pizza) => {
    const order = { ...this.state.order };
    order[key] = order[key] - 1;
    let newTotal = this.state.orderTotal - (pizza.amount);

    if (order[key] === 0) {
      newTotal = this.state.orderTotal - pizza.amount;
      delete order[key];
    }

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' render={(props) =>
              <Home {...props}
                updatePostcode={this.updatePostcode} />} />
            <Route exact path='/menu' render={(props) =>
              <Menu {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                order={this.state.order} />} />
            <Route exact path='/cart' render={(props) =>
              <Cart {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
                order={this.state.order}
                updateCheckoutTotal={this.updateCheckoutTotal} />} />

          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}


if (document.getElementById('PizzaApp')) {
  ReactDOM.render(<PizzaApp />, document.getElementById('PizzaApp'));
}
