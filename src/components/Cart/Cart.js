import classes from './Cart.module.css';
import Modal from '../UI/Modal';


const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{
                id: 'm1',
                name: 'Sushi',
                description: 'Finest fish and veggies',
                price: 22.99,
            }].map((item) => {
              return   <li> {item.name}  </li>
            })}
        </ul>
    )

 return (
     <Modal>
        {cartItems}
         <div  className={classes.total}> 
           <span> Total Amount </span>  
           <span> 35.62 </span>  
           <div  className={classes.actions}> 
            <button  className={classes['button--alt']}>Close </button>
            <button  className={classes.button}   > Order </button>

            </div>
         </div>
     </Modal>
 )
}

export default Cart;