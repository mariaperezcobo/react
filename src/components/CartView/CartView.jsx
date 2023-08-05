import { useContext } from 'react'
import './CartView.scss'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai';
import { EmptyCart } from '../EmptyCart/EmptyCart';
import { Title } from '../Title/Title';

export const CartView = () =>{
    const {cart, totalCompra, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div>
                <EmptyCart />
            </div>
        )
    }


    return (
        <div >
            <Title>Carrito de Compras</Title>
                 
             <div className='contenedorCarrito row '>
            {
                cart.map((item)=>(
                    <div  className='col-3 margin' key={item.id}>
                        <Card style={{ width: '20rem' }} >
                            <Card.Img variant='top' src={item.imagen} />
                            <Card.Body>
                                <Card.Title className='titulo_card2'>{item.nombre}</Card.Title>
                                <Card.Text >
                                Precio por unidad: ${item.precio}
                                </Card.Text>
                                <Card.Text >
                                Cantidad: {item.cantidad}
                                </Card.Text>
                                <AiOutlineDelete size={20} onClick={()=> eliminarProducto(item.id)}/> 
                            </Card.Body>  
                        </Card>
                    </div>
                ))
            }
            </div>
            <div className='contenedorPrecioFinal'>
                <p className='totalCompra btn btn-secondary' variant='secondary' size="lg" >El precio total de la compra es: ${totalCompra()}</p> 
            </div> 
            <div className='contenedorPrecioFinal2'>
                <Link to='/todos' className='total_Producto2 btn btn-outline-secondary' variant='outline-secondary' >Seguir comprando</Link>   
                <Button onClick={vaciarCarrito} className='total_Producto2' variant='outline-secondary' >Vaciar Carrito</Button>   
            </div> 
            <div className='contenedorPrecioFinal2'>
                <Link to='/checkout' className='terminarCompra btn btn-primary' >Terminar mi compra</Link>   
                   
            </div> 
            
        </div>
    )
}