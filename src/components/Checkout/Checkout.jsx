import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import './Checkout.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { Order } from '../Order/Order';
import { Title } from '../Title/Title'

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
         
          <Order>{orderId}</Order>
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
        <Title>Checkout</Title>
       
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
                      <h3 className='datos'>Ingresa tus datos</h3>
                        <Field className="form-control my-2" placeholder= "nombre" type="text" name="nombre" />
                        <ErrorMessage name="nombre" component="p" />
                        <Field className="form-control my-2" placeholder= "apellido" type="text" name="apellido" />
                        <ErrorMessage name="apellido" component="p"/>
                        <Field className="form-control my-2" placeholder= "email" type="email" name="email" />
                        <ErrorMessage name="email" component="p"/>
                        <Button type="submit" className='enviar'>Enviar</Button>
                    </Form>
                  )}
              </Formik>              
  
              </div>
              <div className='contenedorContactoFoto'>    
                  <img className="imagenContacto" src="/estirando.png" alt="mujer estirando"/>
              </div>
                    
            </div>
    </div>
           
        </div>
    )
}