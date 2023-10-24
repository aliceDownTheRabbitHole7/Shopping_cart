import React from 'react'

function CartItem (props) {
    const {id, price, title, image} = props.data

  return (
    <div className='cart-item'>
      <img src={image} />
      <h3>{title}</h3>
      <h4>${price}</h4>
    </div>
  )
}

export default CartItem

