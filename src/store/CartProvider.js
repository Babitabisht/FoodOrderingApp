import CartContext from './cart-context';
import {useReducer} from 'react';
const ACTIONS={
    addItem: 'ADD_CART_ITEM'
}

const defaultCartState ={
    items:[],
    totalAmount: 0
}

const cartReducer =(state, action)=>{
  
    if(action.type===ACTIONS.addItem){
      
        const updatedCartItem = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedCartItem,
            totalAmount: updateTotalAmount
        }
    }

    return defaultCartState;

}


const CartProvider = (props) =>{

    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler=(item)=>{
        cartDispatcher({type: ACTIONS.addItem, item:item})
    };
    const removeItemFromCartHandler=()=>{};
    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler 
    };
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
}

export default CartProvider;