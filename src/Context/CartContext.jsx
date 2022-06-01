import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const addProduct = () => {
      setCount(count+1)
  }

  // Composition: Information flows from Parent to child and never from child to parent
  // Inheritance
  return (
    <CartContext.Provider value={{ count, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
