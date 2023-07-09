
import { ItemCard } from '../ItemCard/ItemCard';

export const ItemList = ({productos}) =>{

    return (
        <div className='catalogo_contenedor row contenedor justify-content-around'>
            
            {
            productos.map ((producto) =>  <ItemCard key={producto.id} item={producto}/>  
            )}
        </div>
    )
}