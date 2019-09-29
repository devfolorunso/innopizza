import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pizza from './Pizza';

class Pizzas extends Component{
    static propTypes = {
        addToOrder: PropTypes.func.isRequired
      }

    render(){ 
        return this.props.pizzas.map((pizza) => (
            	<Pizza  key={ pizza.id } pizza={ pizza }   addToOrder={this.props.addToOrder}/>
        ));

    }
}


// propTypes
Pizzas.propTypes = {
    pizzas: PropTypes.array.isRequired
}


export default Pizzas;

