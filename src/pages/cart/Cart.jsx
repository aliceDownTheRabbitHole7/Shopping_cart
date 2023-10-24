import React, { useContext } from 'react'
import PRODUCTS from '../../data/products.js'
import { ShopContext } from '../../context/ShopContext.jsx'
import CartItem from './CartItem.jsx'

function Cart() {
  const  { cartItems } = useContext(ShopContext)
  const cartProducts = PRODUCTS.map((item, i) => {
    if (cartItems[item.id] !== 0) {
      return <CartItem data={item}  key={i} />
    }
  })

  return (
    <div className='cart-container'>
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cart-items">
        {cartProducts}
      </div>
    </div>
  )
}

export default Cart
