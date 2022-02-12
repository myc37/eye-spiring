import React from "react";
import "./index.css";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = () => {
	return <Navbar collapseOnSelect expand="lg" className="nav" variant="light" >
	<Container>
	<Navbar.Brand href="#home">AcuView</Navbar.Brand>
	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	<Navbar.Collapse id="responsive-navbar-nav">
	  <Nav className="me-auto">
		  
		
		
	  </Nav>
	  <Nav>
	  <NavDropdown title="Services" id="collasible-nav-dropdown">
		  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		  <NavDropdown.Divider />
		  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		</NavDropdown>
	  <Nav.Link href="#marketplace">Marketplace</Nav.Link>
		<Nav.Link href="#services">FAQ</Nav.Link>
	  </Nav>
	</Navbar.Collapse>
	</Container>
  </Navbar>
};

export default AppNavbar;
