import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect (()=> {

        pedirDatos()
        .then(r => {
           if (categoryId) {
            setProductos (r.filter(prod => prod.categoria === categoryId))
           } else  {
            setProductos(r)
           }
        })
        .catch (error => console.log(error))
      
    }, [categoryId])

    return (
        <div className='contenedor'>
            <div className='contenedorTitulo'>
                 <h1 className='tituloPrincipal'>
                 {categoryId ? categoryId.toUpperCase() : "Todos los productos"}
            </h1> 
            </div>
        <div className='contenedorProductos'>
            <ItemList productos={productos}/>
        </div>
        </div>
        
      
       
    )
}