import React from 'react';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import Shop from '../Shop/Shop';
import "./Cart.css";


const Cart = () => {
  const { cart, precioTotal } = useCartContext();
  if (cart.length === 0) {
    return (
      <div>
          <p className="noHayProductos">No hay productos en el carrito. 😞</p>
      </div>
    )
  }

  return (
    <div>
      {
        cart.map(product => <ItemCart key="{product.id}" product={product} />)
      }
      <p className="Total">
        Total: $ {precioTotal()}
      </p>
      <Shop />
    </div>
  );
}

export default Cart;