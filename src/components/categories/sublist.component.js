import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import Cart from "../cart/cart.component";

class CategoriesSubList extends Component {
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
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
        }}
      />
    );
  };

  FlatListIcon = (item) => {
    if(item.sublevels){
        return (
            <Icon
                name="arrow-forward"
                size={18}
                onPress={() => this.props.navigation.navigate("categorySubList",{categories:item.sublevels})}
            />
        );
    }else{
        return (
            <Icon
                name="restaurant"
                size={18}
                onPress={() => this.props.navigation.navigate("productList",{sublevel_id: item.id,category_name: item.name})}
            />
        );
    }
  };

  render() {
      return (
        <FlatList
            style={styles.listContainer}
            data={this.props.navigation.getParam('categories',null)}
            ItemSeparatorComponent = { this.FlatListItemSeparator }
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={data => (
                <ListItem
                title={data.item.name}
                rightIcon={this.FlatListIcon(data.item)}
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

export default CategoriesSubList;