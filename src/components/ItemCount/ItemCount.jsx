import React, {useState, useEffect} from 'react';
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrementar = () => {
        setCount(count - 1);
    }

    const incrementar = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <div className="counter">
        <button className="btn" onClick={decrementar} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button className="btn" onClick={incrementar} disabled={count >= stock}>+</button>
        <div className="btn-list">
            <button className="btn-add" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
</div>
  );
}

export default ItemCount;