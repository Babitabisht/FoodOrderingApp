
import './App.css';
import Header from './components/Layout/Header'
import Meal from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler =()=>{
    setShowCart(true);
  }

  const hideCartHandler =()=>{
    setShowCart(false);
  }



  return (
    <div >

      {showCart &&  <Cart />}
     
      <Header onShowCart={showCartHandler} />
      <main>
             <Meal/>
      </main>
    </div>
  );
}

export default App;
