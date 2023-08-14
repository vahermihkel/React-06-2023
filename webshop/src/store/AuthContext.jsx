// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false); // Set initial data here

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// export function useCartSumContext() {
//   return useContext(CartSumContext);
// }
