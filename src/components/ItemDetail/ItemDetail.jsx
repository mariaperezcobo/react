import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    return (
        <div className='containerItem'>
             
        <Card style={{ width: '30rem' }} >
        <Card.Title className='titulo_cardItem'>{item.nombre}</Card.Title>
           <Card.Img variant='top' src={item.imagen} />
            <Card.Body>
               
               <Card.Text className='botonprecio_Item'>
                 ${item.precio}
               </Card.Text>
               <Button variant="secondary">Agregar al carrito</Button>
           </Card.Body>
       </Card>

        </div>
    )
    
}

export default ItemDetail