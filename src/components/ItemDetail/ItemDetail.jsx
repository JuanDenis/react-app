import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions  } from '@mui/material';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { agregarProducto } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    agregarProducto(data, quantity);
   }

  return (
      <Card className="ProductDetailed">
          <CardMedia component="img" image= {data.img}/>
          <CardContent className="Detailed">
              <Typography gutterBottom variant="h5" component="div"><h3 className="Title">{data.title}</h3></Typography>
              <Typography ><p className="Description">{data.description}</p></Typography>
              <small className="Stock">Stock: {data.stock}</small>
              <p className="Price">${data.price}</p>
              <CardActions className="cardActions">
              {
                goToCart
                ? <Link to="/cart" className="irAlCarrito">Terminar Compra</Link>
                : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
              }
             </CardActions>
          </CardContent>
      </Card>
  );
}

export default ItemDetail;