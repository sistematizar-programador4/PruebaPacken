import { createStore, combineReducers } from "redux";
import CategoriesReducer from "../reducers/categories.reducer";
import ProductsReducer from "../reducers/products.reducer";
import CartReducer from "../reducers/cart.reducer"
const rootReducer = combineReducers({
    categoriesReducer: CategoriesReducer,
    productsReducer: ProductsReducer,
    cartReducer: CartReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;