import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import './ItemDetail.scss'
import {ItemCount} from "../ItemCount/ItemCount"
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {
   const { agregarAlCarrito, isInCart } = useContext(CartContext)
  

    const [cantidad, setCantidad] = useState(1)
    
    const handleAgregar = () =>{
        const newItem = 
        {
            ...item,
        cantidad}
    
        agregarAlCarrito(newItem)
    }

    return (

        <div className='containerItem'>
            <Card style={{ width: '40rem' }} >
                <Card.Title className='titulo_cardItem'>{item.nombre}</Card.Title>
                <Card.Img variant='top' src={item.imagen} />
                <Card.Body>
                <Card.Text className='botonprecio_Item'>${item.precio}</Card.Text>
                
                <div className='marginDetail'>
                {item.alt}
                    </div>
                <div className='marginDetail'>
                {item.descripcion}
                </div>
            
                
                {
                    isInCart (item.id)
                    ? <div className='formato'>
                        <Link to="/cart" className="btn irAlCarrito">Ir al carrito</Link>
                        <Link to="/todos" className="btn irAlCarrito">Seguir comprando</Link>
                        </div>
                    :   
                    <ItemCount 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        agregar={handleAgregar}
                    />
                    }

             
                
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail