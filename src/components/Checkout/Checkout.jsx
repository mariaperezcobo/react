import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import './Checkout.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'

import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
  nombre: Yup.string()
          .min(3,'El nombre es demasiado corto')
          .max(20,'Ingresar menos de 20 caracteres')
          .required('Este campo es obligatorio'),
  apellido: Yup.string()
          .min(3,'El nombre es demasiado corto')
          .max(20,'Ingresar menos de 20 caracteres')
          .required('Este campo es obligatorio'),
  email: Yup.string()
          .email('El email es inválido')
          .required('Este campo es obligatorio'),
})

export const Checkout = () => {
  const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  //  const [values, setValues] = useState({
  //       nombre:'',
  //       apellido:'',
  //       email:''
  //  })   

 
  // const handleInputChange = (e) =>{
    
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   })
  // }
 
  const handleSubmit =  (values) =>{
      
      //to create the order
      const orden = {
        cliente: values,
        items: cart.map(item => ({id: item.id,precio: item.precio, cantidad: item.cantidad, nombre: item.nombre }) ),
        total: totalCompra(),
        fyh: new Date()
      } 
      console.log(orden)

//to actualize the document
      
      // orden.items.forEach(item =>{
      //   const docRef = doc(db, "productos", item.id)
      //   getDoc(docRef)
      //     .then((doc)=>{
      //         const stock = doc.data().stock
      //         if (stock>= item.cantidad){

      //         }
      //         updateDoc(docRef,{
      //           stock: stock - item.cantidad
      //         })
      //     })
        
      // })

 //to send to firebase
 const ordersRef = collection (db, "orders")

 addDoc(ordersRef, orden)
     .then((doc)=>{
       console.log(doc.id)
       vaciarCarrito()
      setOrderId(doc.id)
     })

    }

    if (orderId) {
      return (
        <div>
          <h2>tu compra se realizó exitosamente</h2>
          <p>El numero de orden es: {orderId}</p>
        </div>
      )
    }

    if (cart.lenght === 0) {
      return(
        <Navigate to="/"></Navigate>
      )
    }

    return (
      <div>
        <div className='contenedorTitulo'>
          <h1 className='tituloPrincipal'>Checkout</h1>
        </div>

        <div className='contenedor_contacto'>
            
          <div className='contenedorContactoFotoyTexto'>
            <div className='contenedorContactoTexto'>
              
              <Formik
                initialValues={{
                   nombre: "",
                   apellido: "",
                   email: "" 
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
                >

                  {()=>(
                    <Form>
                        <Field className="form-control my-2" placeholder= "nombre" type="text" name="nombre" />
                        <ErrorMessage name="nombre" component="p" />
                        <Field className="form-control my-2" placeholder= "apellido" type="text" name="apellido" />
                        <ErrorMessage name="apellido" component="p"/>
                        <Field className="form-control my-2" placeholder= "email" type="email" name="email" />
                        <ErrorMessage name="email" component="p"/>
                        <Button type="submit">Enviar</Button>
                    </Form>
                  )}
              </Formik>


              {/* <form onSubmit={handleSubmit}>
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

              </form> */}
              
  
                </div>
                    <div className='contenedorContactoFoto'>
                        
                        <img className="imagenContacto" src="/estirando.png" alt="mujer estirando"/>
                    </div>
                    
            </div>
    </div>
           
        </div>
    )
}