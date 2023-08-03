import { Link } from "react-router-dom"
import './EmptyCart.scss'
import Button from 'react-bootstrap/esm/Button';

export const EmptyCart = () => {
    return(
        <div>
            <h2 className="carritoVacio">Tu carrito esta vacio</h2>
            <Link to='/todos' className='total_Producto btn btn-secondary' variant='outline-secondary' >Ir a productos</Link> 
        </div>
        
    )
}