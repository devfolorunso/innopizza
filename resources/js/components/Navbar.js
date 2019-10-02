import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { formatPrice } from '../formatcurrency';

class Navbar extends Component {

  render() {
    return (
      <Menu fixed='top' borderless id='navbar'>
        <Container>
          <Menu.Item as={Link} to='/menu' id='navbar-header'>innoPizza</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar;
