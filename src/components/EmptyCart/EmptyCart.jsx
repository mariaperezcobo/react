import { Link } from "react-router-dom"
import './EmptyCart.scss'


export const EmptyCart = () => {
    return(
        <div className="contenedor_emptyCard">
            <div className="contenedorEmptyCard2">
                <div className="contenedor_1">
                    <h2 className="carritoVacio">Tu carrito esta vacio</h2>
                </div>
                <div className="contenedor_2">
                <Link to='/todos' className='total_Producto btn btn-secondary' variant='outline-secondary' >Ir a productos</Link> 
                </div>
            </div>
            </div>
        
    )
}