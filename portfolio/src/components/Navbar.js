import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar expand="lg" variant="light" fixed="top">
            <Navbar.Brand href="/">Rian</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-flex align-items-center">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#examples">Work Examples</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav>
                <Nav className="ml-auto d-flex align-items-center">
                    <Nav.Link href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"> sunthbocusrian@gmail.com</i></Nav.Link>
                    <Nav.Link href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</Nav.Link>
                    <Nav.Link href="/" className="d-flex flex-row align-items-center"><div className="flag-de"></div>Translate to German</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;