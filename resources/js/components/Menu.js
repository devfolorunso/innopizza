import React, { Component } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import Navbar from './Navbar';
import Footer from './Footer';
import Pizzas from './Pizzas';


class Menu extends Component{
  state = {
    pizzas: []
  }
  static propTypes = {
    order: PropTypes.array,
    orderTotal: PropTypes.number,
    addToOrder: PropTypes.func.isRequired
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/pizzas')
      .then(res => this.setState({ pizzas:res.data.data }));
  }

  render(){ 
     
      return (
      <div>  
        <Navbar  order={this.props.order} orderTotal={this.props.orderTotal}>
      {this.props.orderTotal > 0 && <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>}
        </Navbar>
        <Container id='page-container'>
      <Header as='h1' id='page-header'>Pizza Selection</Header>
      <Container textAlign='center' id='menu-free-banner'>
        <p id='menu-banner-text'>Free delivery for orders over £12</p>
      </Container>
      <Container id='menu-pizza-container'>
            <Pizzas pizzas={this.state.pizzas} />
      </Container>
    </Container>
    <Footer />
</div>
     
      );
     
  }
}



export default Menu;

