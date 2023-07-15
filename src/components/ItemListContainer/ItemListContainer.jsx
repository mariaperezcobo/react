import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContaier = () => {
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
      
    }, [])
 

    return (
        <div>
            <ItemList productos={productos}/>
          
        </div>
    )
}