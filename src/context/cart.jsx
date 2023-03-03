import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //methods
  const addToCart = (product) => {
    //check if product is already in cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      //una forma seria usar structuredClone
      const newCart = structuredClone(cart);
      newCart[productInCartIndex] += 1;
      return setCart(newCart);
    }

    //producto no esta en el carrito
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const clearCart = (product) => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
