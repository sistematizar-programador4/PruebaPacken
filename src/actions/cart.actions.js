import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';

export const addToCart = (item) => ({
        type: ADD_TO_CART,
        payload: item
})

export const removeItem = (item) => ({
        type: REMOVE_FROM_CART,
        payload: item
})

export const emptyCart = () => ({
        type: EMPTY_CART
})