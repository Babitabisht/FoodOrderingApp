
import './App.css';
import Header from './components/Layout/Header'
import Meal from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react';
import CartProvider from '../src/store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler =()=>{
    setShowCart(true);
  }

  const hideCartHandler =()=>{
    setShowCart(false);
  }



  return (

    <CartProvider >

      {showCart &&  <Cart   onHideCart={hideCartHandler} />}
     
      <Header onShowCart={showCartHandler} />
      <main>
             <Meal/>
      </main>
    </CartProvider>
  );
}

export default App;
