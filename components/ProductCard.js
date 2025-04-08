//  import { useContext } from "react";
//  import { CartContext } from "../context/CartContext";

//  import { useCart } from "../context/CartContext";


import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Debugging: Check if localStorage has cart data
  useEffect(() => {
    if(typeof window !== "undefined"){
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log("Loaded cart from localStorage:", storedCart);
    if (storedCart.length > 0) setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    if(cart.length >0){
    // console.log("Saving cart to localStorage:", cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
