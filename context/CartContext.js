"use client";

import toast from "react-hot-toast";
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  const clearCart = () => {
    setCart([]); // Reset the cart to an empty array
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Loaded cart from localStorage:", storedCart);
    if (storedCart.length > 0) setCart(storedCart);
  }, []);

  // Save cart to localStorage when cart changes
  useEffect(() => {
    console.log("Saving cart to localStorage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to the cart
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success("Increased quantity");
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      toast.success("Added to cart");
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  }

  // Remove item from the cart
  function removeFromCart(id) {
    toast("Removed item");
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // Update item quantity
  function updateQuantity(id, newQuantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  // Calculate total price
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart,clearCart, removeFromCart, updateQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
