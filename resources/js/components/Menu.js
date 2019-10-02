import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Grid, Container, Button } from 'semantic-ui-react';

import Navbar from './Navbar';
import Footer from './Footer';
import Pizzas from './Pizzas';


class Menu extends Component {
  state = {
    pizzas: []
  }
  // static propTypes = {
  //   order: PropTypes.array,
  //   orderTotal: PropTypes.number,
  //   addToOrder: PropTypes.func.isRequired
  // }

  componentDidMount() {
    axios.get('/api/pizzas')
      .then(res => this.setState({ pizzas: res.data.data }));
  }

  render() {

    return (
      <div>
        <Navbar />
        <Container id='page-container'>
          <Header as='h1' id='page-header'>Select Your Favourite</Header>
          <Container textAlign='center' id='menu-free-banner'>
            <p id='menu-banner-text'>Free delivery within München  for orders over €12</p>
          </Container>
          <Container id='menu-pizza-container'>
            <Grid stackable columns={2}>
              <Pizzas pizzas={this.state.pizzas} />
            </Grid>
          </Container>
        </Container>
        <Footer />
      </div>

    );

  }
}



export default Menu;

