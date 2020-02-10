/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as actions from '../src/actions/cart.actions';
import categories from '../src/reducers/categories.reducer'
import products from '../src/reducers/products.reducer'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('INITIAL STATE CATEGORIES', () => {
  const action = { type: 'DUMMY' };
  expect(categories(undefined, action)).toMatchSnapshot();
});

it('INITIAL STATE PRODUCTS', () => {
  const action = { type: 'DUMMY' };
  expect(products(undefined, action)).toMatchSnapshot();
});

it('addToCart ACTION', () => {
  store.dispatch(actions.addToCart({
    "quantity": 308,
    "price": "$8,958",
    "available": false,
    "sublevel_id": 3,
    "name": "aute",
    "id": "58b5a5b1b6b6c7aacc25b3fb"
  }));
  expect(store.getActions()).toMatchSnapshot();
});

it('removeItem ACTION', () => {
  store.dispatch(actions.removeItem({
    "quantity": 308,
    "price": "$8,958",
    "available": false,
    "sublevel_id": 3,
    "name": "aute",
    "id": "58b5a5b1b6b6c7aacc25b3fb"
  }));
  expect(store.getActions()).toMatchSnapshot();
});

it('emptyCart ACTION', () => {
  store.dispatch(actions.emptyCart());
  expect(store.getActions()).toMatchSnapshot();
});