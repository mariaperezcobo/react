import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import './ItemDetail.scss'
import {ItemCount} from "../ItemCount/ItemCount"
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {
   const { agregarAlCarrito, isInCart } = useContext(CartContext)
   console.log(isInCart(item.id))

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
            <Card style={{ width: '30rem' }} >
                <Card.Title className='titulo_cardItem'>{item.nombre}</Card.Title>
                <Card.Img variant='top' src={item.imagen} />
                <Card.Body>
                <Card.Text className='botonprecio_Item'>${item.precio}</Card.Text>
                <p>{item.alt}</p>
                <p>{item.descripcion}</p>
                
                {
                    isInCart (item.id)
                    ? <Link to="/cart" className="btn btn-secondary">Terminar mi compra</Link>
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