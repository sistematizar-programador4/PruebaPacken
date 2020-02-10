import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert 
} from 'react-native';
import { Icon } from "react-native-elements";

import { connect } from 'react-redux';
import { removeItem,addToCart } from '../../actions/cart.actions';

class CartItems extends Component {

    state = {
        activeRowKey: null
    }

    render() {
        const { item, index } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.productDes}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                    <Icon
                        raised
                        name='minus'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.props.removeItem(item)} />
                    <Text style={styles.text}>{item.quantity}</Text>
                    <Icon
                        raised
                        name='plus'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.props.addToCart({item:item})} />
                </View>
            </View>
    );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    productDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        fontSize: 16,
        fontWeight:"bold",
        padding: 10
    }
});

export default connect(null,{removeItem,addToCart})(CartItems);