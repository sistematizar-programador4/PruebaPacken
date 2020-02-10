
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoryList from "./src/components/categories/list.component";
import CategorySubList from "./src/components/categories/sublist.component";
import ProductList from "./src/components/products/list.component";
import Checkout from "./src/components/cart/checkout.component"

const AppStack = createStackNavigator({
  categoryList: CategoryList,
  categorySubList: CategorySubList,
  productList: ProductList,
  checkout: Checkout
});

export default createAppContainer(AppStack);