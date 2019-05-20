import { connect } from 'react-redux';
import { addProductToCart } from '../actions';
import DisplayProduct from '../components/DisplayProduct/component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
    return {
        onBuyButtonClick: (id) => {
            dispatch(addProductToCart(id))
        }
    };
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayProduct);

export default CartContainer;