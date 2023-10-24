import React from 'react'

function Product(props) {
    const {image, title, price, id} = props.data

  return (
    <div className='product-container' id={id}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
      <button className='cart-btn'>Add</button>
    </div>
  )
}

export default Product
