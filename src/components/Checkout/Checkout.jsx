import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Checkout.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore';

export const Checkout = () => {
  const {cart, totalCompra} = useContext(CartContext)

   const [values, setValues] = useState({
        nombre:'',
        apellido:'',
        email:''
   })   

 
  const handleInputChange = (e) =>{
    
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
 
  const handleSubmit = (e) =>{
      e.preventDefault()

      //validaciones
      //if (validaciones)
      //if si no tengo items
      console.log("submit")
      console.log(values)

      const orden = {
        cliente: values,
        items: cart.map(item => ({id: item.id,precio: item.precio, cantidad: item.cantidad, nombre: item.nombre }) ),
        total: totalCompra(),
        fyh: new Date()
      } 
      console.log(orden)

 //to send to firebase
 const ordersRef = collection (db, "orders")

 addDoc(ordersRef, orden)
     .then((doc)=>{
       console.log(doc.id)
     })

    }


    return (
      <div>
        <div className='contenedorTitulo'>
          <h1 className='tituloPrincipal'>Checkout</h1>
        </div>

        <div className='contenedor_contacto'>
            
          <div className='contenedorContactoFotoyTexto'>
            <div className='contenedorContactoTexto'>
              
              <form onSubmit={handleSubmit}>
                <Row>
                  <Form.Label column lg={2}>
                    Nombre
                  </Form.Label>
                  <Col>
                    <Form.Control 
                        onChange={handleInputChange}
                        value= {values.nombre}
                        type="text"
                        placeholder="" 
                        name="nombre"
                        />
                  </Col>
                </Row>  
                <br />
                <Row>
                  <Form.Label column lg={2}>
                    Apellido
                  </Form.Label>
                  <Col>
                    <Form.Control 
                        onChange={handleInputChange}
                        value= {values.apellido}
                        type="text" 
                        placeholder=""
                        name="apellido"
                         />
                  </Col>
                </Row>  
                <br />

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2} className='marginContacto'>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                          onChange={handleInputChange}
                          value= {values.email}
                          type="email" 
                          placeholder="" 
                          name="email"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">Enviar</Button>
                    </Col>
                </Form.Group>

              </form>
              
  
                </div>
                    <div className='contenedorContactoFoto'>
                        
                        <img className="imagenContacto" src="/estirando.png" alt="mujer estirando"/>
                    </div>
                    
            </div>
    </div>
           
        </div>
    )
}