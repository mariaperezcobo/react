import {BsFillCartFill} from 'react-icons/bs'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const {totalCantidad} = useContext (CartContext)

    return (
        <Link to='/cart' className='logoCarrito' >
            
            <button type="button" className="btn position-relative contenedor_logoCarrito">
                 
            <BsFillCartFill size={40}/>
                <span className=" top-100 start-30 translate-middle badge rounded-pill badge rounded-pill colorCirculo">
                {totalCantidad()}
                <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </Link>
    )
}