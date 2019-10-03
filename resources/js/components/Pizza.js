import React, { Component } from 'react';
import { Grid, Image, Button, Label, Segment, Header } from 'semantic-ui-react';
import { formatPrice } from '../formatcurrency';
import PropTypes from 'prop-types';
import Order from './Order';

class Pizza extends Component {
	state = {
		loading: false,
		orderShow: false,
		orderItem: {},
	}

	placeOrder = () => {
		setTimeout(() => {
			this.setState({ orderItem: this.props.pizza });
			this.setState({ orderShow: true });
		}, 1000)
	}


	render() {
		return (
			<Grid.Column mobile={5} tablet={8} computer={5}>
				<Segment id='pizza-card' raised>
					<Label color='orange' ribbon>
						<Header as='h5'> {this.props.pizza.name}</Header>
					</Label>
					<Image src={'http://innopizza.s3-eu-west-2.amazonaws.com/' + this.props.pizza.image} />
					<p id="pizza-description">{this.props.pizza.description}</p>
					<div id="pizza-order-btns">
						<Button onClick={this.placeOrder} color='teal' floated="left">
							Order Now
						</Button>

						<Label as='a' color='red' tag>
							<Header as='h5'>{formatPrice(this.props.pizza.amount)}</Header>
						</Label>
					</div>

					<Order
						open={this.state.orderShow}
						order={this.state.orderItem}
						close={() => this.setState({ orderShow: false })}
					/>
				</Segment>

			</Grid.Column>



		)
	}
}



Pizza.propTypes = {
	pizza: PropTypes.object.isRequired,
}

export default Pizza;
