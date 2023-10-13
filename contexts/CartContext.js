import React, { createContext, useEffect, useState } from "react";
import { getAsyncStorageItem, removeAsyncStorageItem, setAsyncStorageItem } from "../utils/asyncStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const syncStorage = async () => {
      await setAsyncStorageItem('cart', cart);
    }
    syncStorage();
  }, [cart])

  useEffect(() => {
    const syncStorage = async () => {
      let storedCartItem = await getAsyncStorageItem('cart')
      if (storedCartItem == null) {
        setCart([]);
      } else {
        setCart(JSON.parse(storedCartItem))
      }
    }
    syncStorage();
  },[])

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
