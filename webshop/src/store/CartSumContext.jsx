// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const CartSumContext = createContext();

// Create a provider component
export function CartSumContextProvider({ children }) {
  const [cartSum, setCartSum] = useState(calculateCartSum()); // Set initial data here

  function calculateCartSum() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]"); 
    let sum = 0;
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    return sum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
}

// export function useCartSumContext() {
//   return useContext(CartSumContext);
// }
