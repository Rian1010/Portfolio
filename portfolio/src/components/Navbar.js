import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="/">Rian</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#examples">Work Examples</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="/">Switch to German</Nav.Link>
                <Nav.Link href="mailto:sunthbocusrian@gmail.com">Email: sunthbocusrian@gmail.com</Nav.Link>
                <Nav.Link href="tel:+49 171 8011984">Phone: +49 171 8011984</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;