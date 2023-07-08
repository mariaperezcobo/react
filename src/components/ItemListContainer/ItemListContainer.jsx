import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

const MOCK_DATA = [
    {nombre: 'Calzas Lisboa', precio: 15000, imagen:'../../public/calzas2.png', alt:'calzas estampadas', id: 'lisboa', categoria: 'calzas'},
    {nombre: 'Calzas Londres', precio: 12000, imagen:'../../public/mujer estir.png', alt:'mujer estirando con calzas grises', id: 'londres',categoria: 'calzas'},
    {nombre:'Calzas Madrid', precio: 10000, imagen:'../../public/zapas2.png', alt:'calzas estampadas blancas y azules', id: 'madrid', categoria: 'calzas'},
    {nombre:'Top Miami', precio: 8000, imagen:'../../public/remera3.png', alt:'remera banca y gris',id: 'miami', categoria: 'remeras'},
   
]

const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout (()=>{
            resolve (MOCK_DATA)
        },2000)
    })
}

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
        <div className='catalogo_contenedor row contenedor justify-content-around'>
            
            {
            productos.map ((producto) => (
                <div className='col-3 margin'>
      <Card style={{ width: '20rem' }} >
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  
            
                   
                </div>
          
            )    
            )}
        </div>
    )
}