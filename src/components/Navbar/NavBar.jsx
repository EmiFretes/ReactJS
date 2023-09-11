import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Zenin Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Remeras</Nav.Link>
                <Nav.Link href="#pricing">Pantalones</Nav.Link>
                <NavDropdown title="Zapatillas" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Marcas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Talles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Envios</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <CartWidget>
          

          </CartWidget>
          
        </Navbar>
      );
    }

export default NavBar;