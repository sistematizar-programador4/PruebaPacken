import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    TouchableOpacity 
} from 'react-native';

class Product extends Component {
    addToCart = () => {
        this.props.addItemsToCart(this.props.item)
    }
    render() {
        const { product } = this.props;
        return (
        <View style={styles.container}>
            <View style={styles.productDes}>
                <Text style={styles.product}>{product.item.name}</Text>
                <Text style={styles.product}>{product.item.price}</Text>
                <Text style={styles.product}>Quantity: {product.item.quantity}</Text>
                <Button onPress={this.addToCart} style={styles.addBtn} disabled={product.item.available} title="Add to cart">
                </Button>
            </View>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor:"white"
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    product:{
        fontWeight:"bold",
        fontSize: 18
    },  
    addBtn: {
        padding: 10,
        backgroundColor: "#1abc8c"
    },
    text: {
        color: 'black',
        fontSize: 18,
        padding: 10,
    }
});
export default Product;