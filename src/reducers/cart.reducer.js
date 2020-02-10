import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
    cart: [],
    total: 0,
}
export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:
            let indexToUpdate = state.cart.findIndex(item => item.id === action.payload.item.id)
            if(indexToUpdate > -1) {
                state.cart[indexToUpdate].quantity += 1;
                return {
                    ...state,
                    cart: [...state.cart],
                    total: state.total + parseInt(action.payload.item.price.replace('$','').replace(',',''))
                }
            } 
            action.payload.item.quantity = 1;
            return {
                ...state,
                cart: [action.payload.item, ...state.cart],
                total: state.total + parseInt(action.payload.item.price.replace('$','').replace(',',''))
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            let indexToDelete = state.cart.findIndex(item => item.id === action.payload.id)
            if(indexToDelete > -1) {
                state.cart[indexToDelete].quantity -= 1;
                if(state.cart[indexToDelete].quantity === 0){
                    return {
                        ...state,
                        cart: state.cart.filter((item) => item.id !== action.payload.id),
                        total: (state.total - action.payload.price === NaN)?0:state.total - action.payload.price
                    }
                }
                return {
                    ...state,
                    cart: [...state.cart],
                    total: state.total - parseInt(action.payload.price.replace('$','').replace(',',''))
                }
            } 
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                total: (state.total - action.payload.price === NaN)?0:state.total - action.payload.price
            }
        default:
            return state
    }
}