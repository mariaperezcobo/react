import Button from 'react-bootstrap/Button';
import './ItemCount.scss'
import { useState } from 'react';

export const ItemCount = () => {
const [counter, setCounter] = useState (1)

const handleRestar = () =>{
    counter > 1 && setCounter (counter -1)
}

const handleSumar = () => {
    setCounter (counter + 1 )
}

return (
    <div className='selector_Unidades'> 
         <Button onClick={handleRestar} variant="secondary" size="sm">-</Button>{' '}
         <Button variant="light" size="sm">{counter}</Button>{' '}
         <Button onClick={handleSumar} variant="secondary" size="sm">+</Button>{' '}

</div>
)
   
}
