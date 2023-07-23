import './Header.scss'
import reactLogo3 from '../../assets/logo2.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget';


export const Header = () =>{
    return (
        
          <div className="color--barranav">
              <div className="colornav">
              <Navbar expand="lg" >
                <Container>
                  <Navbar.Brand href="#home"><img className="logo" src={reactLogo3} alt="logo"></img>   </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Link to="/" className="menu_desplegable">Inicio</Link>
                      <Link to="/todos" className="menu_desplegable">Todos los Productos</Link>
                      <Link to="/productos/calzas" className="menu_desplegable">Calzas</Link>
                      <Link to="/productos/remeras" className="menu_desplegable">Remeras</Link>
                      <Link to="/nosotros" className="menu_desplegable">Nosotros</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              </div>
         
              <div className='cartWidget'>
              <CartWidget />
              </div>

          </div>
  
         
           
        
    )
}