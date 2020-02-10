import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutItems from '../cart/checkoutItems.component';
import Cart from "../cart/cart.component";

export class Checkout extends Component {

 static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Checkout',
      headerRight: <Cart navigation={navigation}/>,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#845cc3"
      }
    }
  }
    render() {
    	const { cartItems, navigation, cartTotal } = this.props;
        return (
            <CheckoutItems cartItems={cartItems} cartTotal={cartTotal} navigation={navigation}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.cart,
        cartTotal: state.cartReducer.total
    };
};

export default connect(
    mapStateToProps
)(Checkout);