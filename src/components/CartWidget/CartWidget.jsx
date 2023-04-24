import React from 'react';
import { useCartContext } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";


const CartWidget = () => {
  const { totalDeProductos } = useCartContext();
  return (
    <div className="widget"> 
        <ShoppingCartIcon className="cart-icon"/>
        <span>{totalDeProductos() || '0'}</span>
    </div>
  );
}

export default CartWidget;