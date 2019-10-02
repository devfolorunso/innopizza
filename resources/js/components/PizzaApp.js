import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';


class PizzaApp extends Component {
  state = {
    postcode: ''
  }

  updatePostcode = (newPostcode) => {
    this.setState({
      postcode: newPostcode
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
            <Route exact path='/menu' component={Menu} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}


if (document.getElementById('PizzaApp')) {
  ReactDOM.render(<PizzaApp />, document.getElementById('PizzaApp'));
}
