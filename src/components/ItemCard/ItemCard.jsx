import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 



export const ItemCard = ({item}) => {
    return (
        <div key={item.id} className='col-3 margin'>
            <Card style={{ width: '20rem' }} >
           <Card.Img variant='top' src={item.imagen} />
            <Card.Body>
               <Card.Title className='titulo_card'>{item.nombre}</Card.Title>
               <Card.Text>
                 ${item.precio}
               </Card.Text>
               <Button variant='primary'>Agregar al carrito</Button>
           </Card.Body>
       </Card>
   </div>
    )
}

