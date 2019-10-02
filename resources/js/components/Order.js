import React, { Component } from 'react';
import { Button, Header, Menu, Icon, Label, Image, Modal } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';
import { formatPrice } from '../formatcurrency';



class Order extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    quantity: 1,
    quantityMessage: '',
    totalAmount: 0,
  }


  IncreasePizza = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    this.setState({ quantityMessage: '' });
    this.setState({ totalAmount: (this.state.quantity + 1) * this.props.order.amount });
  }

  Decrement = () => {
    this.setState({ quantity: this.state.quantity - 1 })
    this.setState({ totalAmount: (this.state.quantity - 1) * this.props.order.amount });
  }

  ReducePizza = () => {
    (this.state.quantity === 1) ? this.setState({ quantityMessage: 'Sorry, You cannot buy Zero [0] item.' }) :
      this.Decrement();
  }

  onToken = (token) => {
    console.log(token);
    JSON.stringify(token);
    alert(`Payment Sucessful`);
  }
  render() {
    return (
      <div>

        <Modal  {...this.props} size='large'>
          <Modal.Header>
            <Label attached='top'>Continue with your order...</Label>
          </Modal.Header>


          <Modal.Content image>
            <Image wrapped size='medium' src={`/storage/${this.props.order.image}`} />


            <Modal.Description>
              <Label as='a' color='teal' ribbon='right'>
                <Header>{this.props.order.name}</Header>
              </Label>

              <div id="modal-pizzza-details">
                <p><b>Item Description:</b> {this.props.order.description} </p>
                <p><b>Item Price/Quantity:</b> <Label as='a' color='teal' tag>{formatPrice(this.props.order.amount)} </Label> </p>
                <p><b>Total Price:</b>  <Label as='a' color='teal' tag>{formatPrice(this.state.totalAmount)}</Label> </p>
              </div>

              <Menu compact>
                <Menu.Item as='a'>
                  <Icon name='cart' /> Quantity
                  <Label color='red' floating>
                    {this.state.quantity}
                  </Label>
                </Menu.Item>
              </Menu>

              <Button color='violet'
                onClick={this.IncreasePizza}> + </Button>

              <Button color='red'
                onClick={this.ReducePizza}> - </Button>

              {this.state.quantityMessage}

              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_AiMnY5ukNmggPuQpkMcQ3RZ6002qerydEm"
                name="innoPizza"
                description="dein lieblings at Your doorstep"
                image="/media/logo.png"
                panelLabel="Finalize Payment"
                amount={this.state.totalAmount * 100}
                currency="USD"
                locale="en"
                shippingAddress={true}
                billingAddress={true}>


                <Button primary>
                  Complete Order <Icon name='cart arrow down' />
                </Button>


              </StripeCheckout>
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={this.props.close} color='red' >
              Cancel Order
                  </Button>
          </Modal.Actions>

        </Modal>
      </div>
    );
  }
}



export default Order;
