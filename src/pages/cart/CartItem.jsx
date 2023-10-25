import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

function CartItem (props) {
    const {id, price, title, image} = props.data
    const { cartItems, addToCart, removeFromCart, updateItem } = useContext(ShopContext)

  return (
    <div className='cart-item'>
      <img src={image} />
      <div className="description">
        <h3>{title}</h3>
        <h4>${price}</h4>
        <div className="count-handler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateItem(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

