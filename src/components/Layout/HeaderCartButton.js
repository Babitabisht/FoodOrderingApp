import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
    const cartCtx= useContext(cartContext);
    
    let totalItemsInCart = cartCtx.items.reduce((total, item)=>{ 
        
       return total + item.amount;
    
    },0)

    return (

        <button className={classes.button} onClick={props.onShowCart}>

            <span className={classes.icon}>  <CartIcon /> </span>
            <span>Your Cart </span>
            <span className={classes.badge}> {totalItemsInCart} </span>


        </button>
    );
}


export default HeaderCartButton;