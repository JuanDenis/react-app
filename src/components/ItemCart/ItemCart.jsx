import React from 'react';
import { useCartContext } from '../../context/CartContext';
import "./ItemCart.css";

const ItemCart = ({ product }) => {
    const { eliminarProducto } = useCartContext();
  return (
        <div className="carrito-producto">
                <img src={product.img} alt={product.title} className="carrito-producto-imagen"/>
            <div className="carrito-producto-titulo">
                <small>Título</small>
                <h3 className="textoProducto">{product.title}</h3>
            </div>
            <div className="carrito-producto-cantidad">
                <small>Cantidad</small>
                <h3 className="textoProducto">{product.quantity}</h3>
            </div>
            <div className="carrito-producto-precio">
                <small>Precio</small>
                <h3 className="textoProducto">${product.price}</h3>
            </div>
            <button className="eliminarProducto" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
        </div>
  );
}

export default ItemCart;