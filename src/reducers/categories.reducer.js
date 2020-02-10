import { AsyncStorage } from "react-native";
const categoryList = require('../assets/categories.json');

const initialState = {
  categoryList
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;