import { Cart } from './compnents/Cart/Cart';
import {  useState } from 'react';
import './App.css';
import { Header } from './compnents/Layout/Header';
import Meals from './compnents/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false)

  const showCartShown=()=>{
    console.log('open');
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
  
  <CartProvider>
    {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
    
    <Header onShowCart = {showCartShown}/>
    <main>
      <Meals/>
    </main>
  </CartProvider>
  
  );
}

export default App;
