import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../store/cart-context';
import { useContext,useState,useEffect } from 'react';

const HeaderCartButton = (props) => {
    const cartCtx= useContext(cartContext);
    const [buttonHighlight, setButtonHighlight] = useState(false);

    let items = cartCtx.items;

    let totalItemsInCart = cartCtx.items.reduce((total, item)=>{ 
        
       return total + item.amount;
    
    },0)

    useEffect(() => {
       
        setButtonHighlight(true);
       

       let cleanupTime = setTimeout(()=>{
            setButtonHighlight(false)
        },300);

         return () => {
            clearTimeout(cleanupTime);
        }


    }, [items])




    
    let cartButton = buttonHighlight?`${classes.button} ${classes.bump}`: `${classes.button} `;
  
    return (

        <button className={cartButton} onClick={props.onShowCart}>
            <span className={classes.icon}>  <CartIcon /> </span>
            <span>Your Cart </span>
            <span className={classes.badge}> {totalItemsInCart} </span>


        </button>
    );
}


export default HeaderCartButton;