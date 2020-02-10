import { AsyncStorage } from "react-native";

const productsList = require('../assets/products.json');

const initialState = {
    productsList
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;