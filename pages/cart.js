import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

function Cart () {

  const {cartItems, setCartItems} = useContext(CartContext)

  const removeItemFromLocalStorage = function (id) {

    const cartItemsFromLS = JSON.parse(localStorage.getItem('cart'));
    const newCart = cartItemsFromLS.filter((item) => { return item.id !== id})
    localStorage.setItem('cart', newCart)
    const newCartString = JSON.stringify(cartItemsFromLS.filter((item) => { return item.id !== id}))
    localStorage.setItem('cart', newCartString)
    setCartItems(newCart)
  }

  const totalItems = cartItems.reduce((acc, item) => acc + parseInt(item.quantity), 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)


  return (
    <div className='cartscreen'>
      <h1>Cart</h1>
      
      <div className="cart__items__container">
      {cartItems.length ?
      
      cartItems.map(item => (
        <div className="cart--item" key={item.id}>
          <div className="title cart--item-box">
          {item.name}
          </div>
          <div className="price cart--item-box">
          {item.price}
          </div>
          <div className="quantity cart--item-box">
          {item.quantity}
          </div>
          <div className="delete cart--item-box">
          <button onClick={() => removeItemFromLocalStorage(item.id)}>Delete</button>
          </div>
        </div>
      ))
      
       : null}
      </div>

      <div className="cart--totals">
        <div className="total--items">
          <p>Total Items: </p>
          <h3>{totalItems}</h3>
        </div>

        <div className="total--items">
          <p>Total Price: </p>
          <h3>{totalPrice}</h3>
        </div>
      </div>

      <div className="checkout">
        <button>Checkout</button>
      </div>

    </div>
  )
}

export default Cart;