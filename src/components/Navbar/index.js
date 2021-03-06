import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="nav"
			variant="light"
			fixed="top"
		>
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					AcuView
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<NavDropdown
							title="Services"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item>Teleconsult</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/subscriptions">
								Subscriptions
							</NavDropdown.Item>
							<NavDropdown.Item
								href="https://www.essilor.com/en/vision-tests/test-your-vision/"
								target="blank"
								rel="noopener noreferrer"
							>
								Test Your Vision
							</NavDropdown.Item>
							{/* <NavDropdown.Divider />
		  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
						</NavDropdown>
						<Nav.Link as={NavLink} to="/market">
							Marketplace
						</Nav.Link>
						<Nav.Link href="/#faq">FAQ</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
