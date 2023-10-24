import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Product(props) {
  const { image, title, price, id } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  const itemAmount = cartItems[id]

  return (
    <div className="product-container" id={id}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
      <button className="cart-btn" onClick={() => addToCart(id)}>
        Add {itemAmount > 0 && <>({itemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
