import React from 'react';
import './App.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
    if (window.location.pathname === "/") {
        return (
            <Navbar expand="lg" bg="" variant="light" fixed="top">
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
                        <Link to="/de" className="btn btn-primary d-flex flex-row align-items-center">
                            <div className="flag-de mr-2"></div>
                            <div>German</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Navbar expand="lg" bg="" variant="light" fixed="top">
                <Navbar.Brand href="/">Rian</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-items-center">
                        <Nav.Link href="#about">Über Mich</Nav.Link>
                        <Nav.Link href="#examples">Beispiele</Nav.Link>
                        <Nav.Link href="#skills">Kompetenzen</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto d-flex align-items-center">
                        <Nav.Link href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"> sunthbocusrian@gmail.com</i></Nav.Link>
                        <Nav.Link href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</Nav.Link>
                        <Nav.Link href="/" className="btn btn-primary d-flex flex-row align-items-center">
                            <div className="flag-de mr-2"></div>
                            <div>Englisch</div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        );
    }
}

export default Navigation;