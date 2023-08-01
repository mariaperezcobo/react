
import { ItemCard } from '../ItemCard/ItemCard';
import './ItemList.scss'

export const ItemList = ({productos}) =>{

    return (
        <div className='catalogo_contenedor row'>
            {
            productos.map ((producto) =>  <ItemCard key={producto.id} item={producto}/>)
            }
        </div>
    )
}