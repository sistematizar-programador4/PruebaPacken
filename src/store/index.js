import { createStore, combineReducers,applyMiddleware  } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import CategoriesReducer from "../reducers/categories.reducer";
import ProductsReducer from "../reducers/products.reducer";
import CartReducer from "../reducers/cart.reducer"
// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    categoriesReducer: CategoriesReducer,
    productsReducer: ProductsReducer,
    cartReducer: CartReducer
});

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};
// export default {configureStore,persistor};