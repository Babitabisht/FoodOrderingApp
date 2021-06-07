import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItems from '../Cart/CartItem';
const Cart = (props) => {

    const cartCtx = useContext(cartContext);
    const totalAmount = `$${cartCtx.totalAmount}`;
    const showOrderButton = cartCtx.items.length > 0;
    const cartItemRemoveHandler = () => {

    }

    const cartItemAddHandler = () => {

    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => {
                return <CartItems 
                onAdd={cartItemAddHandler.bind(null, item.id)} onRemove={cartItemRemoveHandler.bind(null, item)} item={item} > {item.name}  </CartItems>
            })}
        </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart} >
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount </span>
                <span> {totalAmount} </span>
                <div className={classes.actions}>
                    <button
                        onClick={props.onHideCart}
                        className={classes['button--alt']}>Close </button>
                    {showOrderButton && <button className={classes.button}> Order </button>}


                </div>
            </div>
        </Modal>
    )
}

export default Cart;