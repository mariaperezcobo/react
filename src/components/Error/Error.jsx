import './Error.scss'
import { Link } from 'react-router-dom'

export const Error = () =>{
    return (
        <div >
            <h2 className="error" >
            Página no encontrada
            </h2> 
            
            <Link to="/" className="boton_error" >
            Ir al inicio
            </Link> 
        </div>
)
    
}