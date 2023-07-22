import { useContext } from 'react'
import './CartView.scss'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/esm/Button';

export const CartView = () =>{
    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <div className='contenedorTitulo'>
            <h1 className='tituloPrincipal'>Carrito de Compras</h1>
          </div>
      
<div className='contenedorCarrito'>
{
    cart.map((item)=>(
        <div  className='col-3 margin'>
        <Card style={{ width: '20rem' }} >
            <Card.Img variant='top' src={item.imagen} />
            <Card.Body>
                <Card.Title className='titulo_card'>{item.nombre}</Card.Title>
                <Card.Text >
                   Precio por unidad: ${item.precio}
                </Card.Text>
                <Card.Text >
                   Cantidad: {item.cantidad}
                </Card.Text>
                 </Card.Body>
                
        </Card>
   </div>
     
    ))
}
</div>
        <div className='contenedorPrecioFinal'>
        <Button className='total_Producto' variant='secondary' >El precio total de la compra es: ${totalCompra()}</Button>
        <Button onClick={vaciarCarrito} className='total_Producto' variant='outline-secondary' >Vaciar Carrito</Button>
        
        </div> 
        </div>

        


    )
}