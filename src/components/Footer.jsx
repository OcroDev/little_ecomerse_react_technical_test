import React from 'react';
import { useCart } from '../hooks/useCart';
import './Footer.css';

export const Footer = () => {
  const { cart } = useCart();
  return (
    <footer className='footer'>
      <h4>
        Prueba técnica de React ⚛️
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <h5>cart: {JSON.stringify(cart, null, 2)}</h5>
    </footer>
  );
};
