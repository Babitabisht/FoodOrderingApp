import CartContext from './cart-context';
import {useReducer} from 'react';
const ACTIONS={
    addItem: 'ADD_CART_ITEM',
    removeItem: 'REMOVE_CART_ITEM'
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
    }else if(action.type===ACTIONS.removeItem){

        let itemToRemove = state.items.filter(item=>item.id === action.id);
        // let itemToRemoveIndex= state.items.findIndex(item=>item.id === action.id);

        if(itemToRemove.amount === 1){

        }else{

            let updatedItem={ ...itemToRemove, amount: itemToRemove.amount-1}
            let totalAmount = state.totalAmount - itemToRemove.price;
            let updatedItems= {...state.items ,updatedItem }
            return {
                items:updatedItems,
                totalAmount:totalAmount
            }



        }


    }

    return defaultCartState;

}


const CartProvider = (props) =>{

    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler=(item)=>{
        cartDispatcher({type: ACTIONS.addItem, item:item})
    };
    const removeItemFromCartHandler=(id)=>{
        cartDispatcher({type: ACTIONS.removeItem, id:id})
    };

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