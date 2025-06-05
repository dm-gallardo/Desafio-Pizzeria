import React, { createContext, useState } from 'react';

export const CartCountContext = createContext();

export function CartCountProvider({ children }) {

  
  const [counts, setCounts] = useState({});


  const addCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const lessCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  const getCount = (id) => counts[id] || 0;

  return (
    <CartCountContext.Provider value={{ counts, addCount, lessCount, getCount }}>
      {children}
    </CartCountContext.Provider>
  );
}

export default CartCountContext;