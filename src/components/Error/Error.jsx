import './Error.scss'
import { Link } from 'react-router-dom'

export const Error = () =>{
    return (
        <div >
            <p className="error" >
            Página no encontrada
            </p> 
            <Link to="/" className="boton_error" >
            Ir al inicio
            </Link> 
        </div>
)
    
}