import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();



const CartContextProvider = (props) => {
  
  
  const [cartItems, setCartItems] = useState([])
  
  
  useEffect(() => {
    //localStorage.setItem('cart', JSON.stringify(cartItems));
    const cartDataFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];
    //console.log(`local storage: ${cartDataFromLocalStorage}`)
    setCartItems(cartDataFromLocalStorage)
    //console.log(`context: ${cartItems}`)
  }, [])


  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;

