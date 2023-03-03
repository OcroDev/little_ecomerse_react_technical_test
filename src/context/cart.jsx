import { useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer, cartInitialState, CART_ACTIONS } from '../reducers/cart';

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: product,
    });

  return { addToCart, clearCart, removeFromCart, state };
}

export function CartProvider({ children }) {
  const {
    state: cart,
    addToCart,
    clearCart,
    removeFromCart,
  } = useCartReducer();

  //methods

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
