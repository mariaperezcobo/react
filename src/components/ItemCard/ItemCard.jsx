
import Card from 'react-bootstrap/Card'; 
import './ItemCard.scss'
import { Link } from 'react-router-dom';

export const ItemCard = ({item}) => {
    return (
        <div  className='col-3 margin'>
            <Card style={{ width: '20rem' }} >
                <Card.Img variant='top' src={item.imagen} />
                <Card.Body>
                    <Card.Title className='titulo_card'>{item.nombre}</Card.Title>
                    <Card.Text className='botonprecio'>
                        ${item.precio}
                        {item.stock < 10 ? <p className='ultimas'> Últimas unidades!</p> : null}
                    </Card.Text>
                    <Link to={`/detail/${item.id}`} className='boton_agregar' variant='secondary' >Ver</Link>
                </Card.Body>
            </Card>
       </div>
    )
}

