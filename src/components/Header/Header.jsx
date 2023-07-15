import './Header.scss'
import reactLogo3 from '../../assets/logo2.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

export const Header = () =>{
    return (
        <div>
           <div className="color--barranav colornav">
           <Navbar expand="lg" className="colornav">
      <Container>
        <Navbar.Brand href="#home"><img className="logo" src={reactLogo3} alt="logo"></img>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="/" >Inicio</a>
            <a href="/productos" >Productos</a>
            <a href="/productos/calzas" >Calzas</a>
            <a href="/productos/remeras" >Remeras</a>
            <a href="/nosotros" >Nosotros</a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           </div>
  
           <div className="encabezado">
            
           <button type="button" className="btn position-relative contenedor_logoCarrito">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>  
                <a className="carritoSubtitulo" href="./index.html#tusCompras"> Carrito</a> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge rounded-pill colorCirculo">
                5
                <span className="visually-hidden">unread messages</span>
                </span>
            </button>
           </div> 
           
        </div>
    )
}