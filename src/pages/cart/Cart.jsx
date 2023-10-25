import React, { useContext } from "react";
import PRODUCTS from "../../data/products.js";
import { ShopContext } from "../../context/ShopContext.jsx";
import CartItem from "./CartItem.jsx";
import "../../styles/Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalCartAmount = getTotalAmount();

  const navigate = useNavigate();

  const cartProducts = PRODUCTS.map((item, i) => {
    if (cartItems[item.id] !== 0) {
      return <CartItem data={item} key={i} />;
    }
  });

  return (
    <div className="cart-container">
      <div>
        <h1> Your Cart </h1>
      </div>
      <div className="cart-items">{cartProducts}</div>
      {totalCartAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalCartAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="empty-cart">is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
