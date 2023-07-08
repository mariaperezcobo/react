import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { pedirDatos } from '../../helpers/pedirDatos';




export const ItemListContaier = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect (()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .catch ((error)=>{
            console.log(error)
        })
    },[])
 

    return (
        <div className='catalogo_contenedor row contenedor justify-content-around'>
            
            {
            productos.map ((producto) => (
                <div key={producto.id} className='col-3 margin'>
                     <Card style={{ width: '20rem' }} >
                        <Card.Img variant='top' src={producto.imagen} />
                         <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                              ${producto.precio}
                            </Card.Text>
                            <Button variant='primary'>Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
          
            )    
            )}
        </div>
    )
}