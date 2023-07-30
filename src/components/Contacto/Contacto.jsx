import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contacto.scss'

export const Contacto = () => {
    return (
        <div>
            <div className='contenedorTitulo'>
                <h1 className='tituloPrincipal'>Contacto</h1>
            </div>

            <div className='contenedor_contacto'>
            

            <div className='contenedorContactoFotoyTexto'>
                <div className='contenedorContactoTexto'>
                <Row>
        <Form.Label column lg={2}>
          Nombre
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="" />
        </Col>
      </Row>  
      <br />
      <Row>
        <Form.Label column lg={2}>
          Apellido
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="" />
        </Col>
      </Row>  
      <br />

                <Form>



      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} className='marginContacto'>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="" />
        </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2} className='marginContacto'>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group> */}
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="femenino"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="masculino"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          
          </Col>
        </Form.Group>
      </fieldset>
      <Row>
        <Form.Label column lg={2}>
          Comentarios
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="" />
        </Col>
      </Row>  
      <br />
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Acepto términos y condiciones" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Enviar</Button>
        </Col>
      </Form.Group>
    </Form>
                </div>
                    <div className='contenedorContactoFoto'>
                        
                        <img className="imagenContacto" src="/estirando.png" alt="mujer estirando"/>
                    </div>
                    
            </div>
    </div>
           
        </div>
    )
}