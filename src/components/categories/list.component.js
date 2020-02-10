import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";
import Cart from "../cart/cart.component";

class CategoriesList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Products',
      headerRight: <Cart navigation={navigation}/>,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#845cc3"
      }
    }
  };
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
        }}
      />
    );
  }
  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.categoryList}
        ItemSeparatorComponent = { this.FlatListItemSeparator }
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={data => (
            <ListItem
              title={data.item.name}
              rightIcon={
                <Icon
                  name="arrow-forward"
                  size={18}
                  onPress={() => (this.props.navigation.navigate("categorySubList",{categories:data.item.sublevels}) || null)}
                />
              }
            />
          )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#dce2ff",
    padding: 16
  },
  listText: {
    fontSize: 30
  }
});

const mapStateToProps = state => {
  return {
    categoryList: state.categoriesReducer.categoryList.categories
  };
};

export default connect(mapStateToProps)(CategoriesList);