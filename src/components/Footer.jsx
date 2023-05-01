import React from 'react';
import { useCart } from '../hooks/useCart';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <h5>
        Prueba técnica de React ⚛️
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h5>
      <h6>Shopping Cart usando useContext & useReducer</h6>
    </footer>
  );
};
