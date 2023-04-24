import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button  } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ info }) => {

  return (
    <Link to={`/detalle/${info.id}`} className="item-link">
      <Card className="Card">
          <CardMedia
            component="img"
            image= {info.img}/>
          <CardContent>      
            <Typography gutterBottom variant="h5" component="div"><h3 className="Title">{info.title}</h3></Typography>
            <Typography><small className="Stock">Stock: {info.stock}</small></Typography>
            <p className="Price">${info.price}</p>
          </CardContent>
          <CardActions>
            <Button className="btn">Ver más detalles</Button>
          </CardActions>
        </Card>
    </Link>
  );
}

export default Item;