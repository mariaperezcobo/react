import {BsFillCartFill} from 'react-icons/bs'
import './CartWidget.scss'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <Link to='/cart' className='logoCarrito' >
            <BsFillCartFill size={40}/>
        </Link>
    )
}