import React, { useState } from 'react'
import PRODUCTS from '../data/products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems()
    }

  return (
    <ShopContext.Provider>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
