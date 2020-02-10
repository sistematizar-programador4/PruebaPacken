import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	FlatList,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';
import { emptyCart } from '../../actions/cart.actions';
import CartItems  from './cartItems.component';
// import CustomerForm from './CustomerForm.component';

class CheckoutItems extends Component {  
  render() {
    const { cartItems } = this.props;
    return (
      <View style={styles.container}>
            <View style={styles.annouc}>
                <Text style={styles.anncText}>Please confirm your order and checkout your cart.</Text>
            </View>
            <View style={styles.ckitems}>
                <FlatList 
                    data={cartItems}
            		renderItem={({item, index}) => <CartItems item={item} index={index} />}
            		keyExtractor={(item) => item.id}
            		ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
            	/>
    		</View>
       		<View style={styles.custForm}>
                <ScrollView>
                <Button style={{ alignSelf: 'auto'}} onPress={()=>this.props.emptyCart()} title="Buy"/>  
                </ScrollView> 
        	</View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#dce2ff",
  },
  custForm: {
    flex: 1
  },
  ckitems: {
    height: 250
  },
    annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red',
      fontWeight: "bold",
      fontSize: 22
    },
    anncText:{
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default connect(null,{emptyCart})(CheckoutItems);