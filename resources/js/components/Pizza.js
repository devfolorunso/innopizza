import React, { Component } from 'react';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice } from '../formatcurrency';

// import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';




class Pizza extends Component {
	static propTypes = {
		addToOrder: PropTypes.func.isRequired
	}

	render() {
		return (
			<Grid.Column mobile={5} tablet={8} computer={5}>
				<Segment id='pizza-card' raised>
					<Image src={`/storage/${this.props.pizza.image}`} />
					<Header as='h3'>{this.props.pizza.name}</Header>
					<p>{this.props.pizza.description}</p>
					<div id='pizza-order-info'>
						<Header as='h3'>{formatPrice(this.props.pizza.amount)}</Header>
						<p>
							<Button onClick={() => this.props.addToOrder(this.props.pizza.id)} color='teal'>Add to order</Button>
						</p>
					</div>
				</Segment>
			</Grid.Column>

		)
	}
}



//propTypes
Pizza.propTypes = {
	pizza: PropTypes.object.isRequired,
}

export default Pizza;
