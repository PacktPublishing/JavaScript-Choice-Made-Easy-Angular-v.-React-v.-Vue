import { connect } from 'react-redux';
import { toggleCartVisibility, removeProductFromCart } from '../actions';
import Cart from '../components/Cart/component';

const mapStateToProps = state => {
    return {
        isExpanded: state.cart.isExpanded,
        products: state.cart.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCartButtonClick: () => {
            dispatch(toggleCartVisibility())
        },
        onProductRemoveButtonClick: (id) => {
            dispatch(removeProductFromCart(id))
        }
    };
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;