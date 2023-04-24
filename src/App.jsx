import React from 'react';
import './App.css';

//Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

//Pages
import ErrorPage from './pages/ErrorPage/ErrorPage';

//ReactRouterDom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import CartProvider from './context/CartContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
