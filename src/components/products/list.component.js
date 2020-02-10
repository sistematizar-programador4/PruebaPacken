import React, { Component } from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import { Card, SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { addToCart } from '../../actions/cart.actions';
import Cart from "../cart/cart.component";
import  Product  from './product.component';

class productsList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
    headerTitle: 'Products',
    headerRight: <Cart navigation={navigation}/>,
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: "#845cc3"
    }
    }
  }
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
        loading: false,      
        search: '',
        data: [],       
    };
    this.arrayholder = [];
  };
  
  componentDidMount(){
    this.evaluateProductListItems(this.props.productsList,this.props.navigation.getParam('sublevel_id',null))
  };

  FlatListItemSeparator = () => {
    return (<View style={{height: 5,}}/>);
  };

  renderHeader = () => {    
    return (      
        <SearchBar
            placeholder="Search Product..."
            onChangeText={text => this.updateSearch(text)}
            value={this.state.search}
            containerStyle={{backgroundColor:"#dce2ff"}}
            inputContainerStyle={{backgroundColor:"white"}}
            placeholderTextColor='black'
            lightTheme
            round
        />
    );  
  };
  
  evaluateProductListItems = (items,key) => {
      this.setState({          
        data: items.filter(item => item.sublevel_id === key),
        loading: false,        
      }); 
      this.arrayholder = items.filter(item => item.sublevel_id === key)
  };
  
  updateSearch = (search) => {
    this.setState({search})
    const newData = this.arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    this.setState({ data: newData }); 
  };
  
  orderProducts = (column) => {
    let newData = []
    if(column === 'price'){
      newData = this.arrayholder.sort((a, b) => (a[column].replace('$','').replace(',','') < b[column].replace('$','').replace(',','')) ? 1 : -1)
    }else{
      newData = this.arrayholder.sort((a, b) => (a[column] > b[column]) ? 1 : -1)
    }
    this.setState({ data: newData });
  }

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  }

  render() {
      return (
        <View>
          <View style={styles.container}>
            <Button onPress={() => this.orderProducts('price')} style={{ alignSelf: 'auto'}} title="Order by price"/>
            <Button onPress={() => this.orderProducts('available')} style={{ alignSelf: 'auto'}} title="Order by available"/>
            <Button onPress={() => this.orderProducts('quantity')} style={{ alignSelf: 'auto'}} title="Order by Quantity"/> 
          </View>
          <FlatList
              style={styles.listContainer}
              data={this.state.data}
              ItemSeparatorComponent = { this.FlatListItemSeparator }
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={data => (
                  <Product item={data} addItemsToCart={this.addItemsToCart} product={data}/>
              )}
              contentContainerStyle={{ paddingBottom: 100}}
              ListHeaderComponent={this.renderHeader}
              stickyHeaderIndices={[0]}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#dce2ff",
        padding: 10
    },
    viewContainer: {
        flex: 1,
        justifyContent:'flex-start',
        marginBottom: 10
    },
    listContainer: {
        backgroundColor: "#dce2ff",
    },
    listText: {
        fontSize: 30
    }
});

const mapStateToProps = state => {
    return {
        productsList: state.productsReducer.productsList.products
    };
};

export default connect(mapStateToProps,{addToCart})(productsList);
