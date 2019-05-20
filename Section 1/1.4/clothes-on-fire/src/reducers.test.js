import reducer from './reducers';
import { toggleCartVisibility, addProductToCart, removeProductFromCart } from './actions';
import { getProductById } from './data/products';

it('returns initial state when called with no action', () => {
    expect(reducer(undefined, {})).toEqual({
        cart: {
            isExpanded: false,
            products: []
        }
    });
});

it('it sets isExpanded to true when toggle cart action received', () => {
    const stateAfterFirstToggle = reducer(undefined, toggleCartVisibility());

    expect(stateAfterFirstToggle).toEqual({
        cart: {
            isExpanded: true,
            products: []
        }
    });

    const stateAfterSecondToggle = reducer(stateAfterFirstToggle, toggleCartVisibility());

    expect(stateAfterSecondToggle).toEqual({
        cart: {
            isExpanded: false,
            products: []
        }
    });
});

it('add product to cart works', () => {
    const state = reducer(undefined, addProductToCart('men-t-shirt'));

    expect(state).toEqual({
        cart: {
            isExpanded: false,
            products: [
                getProductById('men-t-shirt')
            ]
        }
    });
});

it('remove product from cart works', () => {
    const initialState = reducer(undefined, addProductToCart('men-t-shirt'));

    expect(initialState).toEqual({
        cart: {
            isExpanded: false,
            products: [
                getProductById('men-t-shirt')
            ]
        }
    });

    const stateAfterRemove = reducer(initialState, removeProductFromCart('men-t-shirt'));

    expect(stateAfterRemove).toEqual({
        cart: {
            isExpanded: false,
            products: []
        }
    });
});

it('add product to cart does not allow for duplicates', () => {
    const firstState = reducer(undefined, addProductToCart('men-t-shirt'));

    expect(firstState).toEqual({
        cart: {
            isExpanded: false,
            products: [
                getProductById('men-t-shirt')
            ]
        }
    });

    const secondState = reducer(firstState, addProductToCart('men-t-shirt'));

    expect(secondState).toEqual({
        cart: {
            isExpanded: false,
            products: [
                getProductById('men-t-shirt')
            ]
        }
    });
});