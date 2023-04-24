import React, { useState, useContext } from 'react';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

  const agregarProducto = (item, quantity) => {
    if (productoEnCarrito(item.id)) {
        setCart(cart.map(product => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
        }));
    } else {
        setCart([...cart, { ...item, quantity}]);
    }
  }

  const precioTotal = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }

  const totalDeProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const limpiarCarrito = () => setCart([]);

  const productoEnCarrito = (id) => {
    return cart.find(product => product.id === id) ? true : false;
  }

  const eliminarProducto = id => setCart(cart.filter(product => product.id !== id));


  return (
    <CartContext.Provider value={{
         limpiarCarrito,
         productoEnCarrito,
         eliminarProducto,
         agregarProducto,
         totalDeProductos,
         precioTotal,
         cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;