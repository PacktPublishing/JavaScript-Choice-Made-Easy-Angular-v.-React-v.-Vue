/*
 * action types
 */

export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

/*
 * action creators
 */

export function toggleCartVisibility() {
  return { type: TOGGLE_CART_VISIBILITY };
}

export function addProductToCart(id) {
    return {
        type: ADD_PRODUCT_TO_CART,
        id
    };
}

export function removeProductFromCart(id) {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        id
    }
};

export function delayedRemoveProductFromCart(id, delay = 1000) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(removeProductFromCart(id));
        }, delay);
    };
};