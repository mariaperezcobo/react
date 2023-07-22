import Button from 'react-bootstrap/Button';
import './ItemCount.scss'


export const ItemCount = ({max, counter, setCounter, agregar}) => {


const handleRestar = () =>{
    counter > 1 && setCounter (counter -1)

}

const handleSumar = () => {
    counter < max && setCounter (counter + 1 )
}



return (
    <div>
        <div className='selector_Unidades'> 
            <Button onClick={handleRestar} variant="secondary" size="sm">-</Button>{' '}
            <Button variant="outline-secondary" size="sm">{counter}</Button>{' '}
            <Button onClick={handleSumar} variant="secondary" size="sm">+</Button>{' '}  
        </div>
        <div>
            <Button onClick={agregar} className="color_botonAgregar" variant="info">Agregar al carrito</Button>
        </div>
    </div>
    
)
   
}
