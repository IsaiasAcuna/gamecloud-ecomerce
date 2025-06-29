import { createContext, useReducer } from 'react';
import cartReducer from './cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    carrito: [],
  });

  return (
    <CartContext.Provider value={{ carrito: state.carrito, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
