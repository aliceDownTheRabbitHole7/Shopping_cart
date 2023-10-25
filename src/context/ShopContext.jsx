import React, { useState, useContext } from 'react'
import PRODUCTS from '../data/products.js'

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id == Number(item))
          totalAmount += cartItems[item] * itemInfo.price
        }
      }
      return totalAmount.toFixed(2)
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateItem = (newAmount, itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateItem, getTotalAmount}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
