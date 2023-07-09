import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';




export const ItemListContaier = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect (()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .catch ((error)=>{
            console.log(error)
        })
    },[])
 

    return (
        <div>
            <ItemList productos={productos}/>
          
        </div>
    )
}