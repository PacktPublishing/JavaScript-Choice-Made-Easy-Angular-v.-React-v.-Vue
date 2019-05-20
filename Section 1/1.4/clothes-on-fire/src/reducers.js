import { combineReducers } from 'redux';
import { TOGGLE_CART_VISIBILITY, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';
import { getProductById } from './data/products';

const INITIAL_CART_STATE = {
    isExpanded: false,
    products: []
};

function cart(state = INITIAL_CART_STATE, action) {
    switch (action.type) {
        case TOGGLE_CART_VISIBILITY:
            return {
                isExpanded: !state.isExpanded,
                products: state.products
            };
        case ADD_PRODUCT_TO_CART:
            const product = getProductById(action.id);

            if (state.products.includes(product)) {
                return state;
            }

            return {
                isExpanded: state.isExpanded,
                products: [
                    ...state.products,
                    product
                ]
            };
        case REMOVE_PRODUCT_FROM_CART:
            return {
                isExpanded: state.isExpanded,
                products: state.products.filter(p => p.id !== action.id)
            };
        default:
            return state;
    }
}

const appReducer = combineReducers({
    cart
});

export default appReducer;