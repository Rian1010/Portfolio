import React from 'react';
import './App.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    const navColour = {
        backgroundColor: "#54cdff",
        // backgroundColor: window.scrollY > 10 ? "#54cdff" : "transparent",
    }
    // function navTransform() {
    //     let scrollPos = 0
    //     this.scrollListener = document.addEventListener("scroll", e => {
    //         scrollPos = e.scrollingElement.scrollTop;
    //         console.log(scrollPos);
    //         if (scrollPos > 1) {
    //             return navColour;
    //         }
    //     })
    // }

    if (window.location.pathname === "/") {
        return (
            <Navbar style={navColour} expand="lg" bg="" variant="light" fixed="top">
                <Navbar.Brand href="/">Rian</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-items-center">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#examples">Work Examples</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto d-flex align-items-center">
                        <Nav.Link href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                        <Nav.Link href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</Nav.Link>
                        <Link to="/de" className="btn d-flex flex-row align-items-center">
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
            <Navbar expand="lg" bg="" variant="light" style={navColour} fixed="top">
                <Navbar.Brand href="/">Rian</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-items-center">
                        <Nav.Link href="#about">Über Mich</Nav.Link>
                        <Nav.Link href="#examples">Beispiele</Nav.Link>
                        <Nav.Link href="#skills">Kompetenzen</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto d-flex align-items-center">
                        <Nav.Link href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                        <Nav.Link href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</Nav.Link>
                        <Link to="/" className="btn d-flex flex-row align-items-center">
                            <div className="flag-en mr-2"></div>
                            <div>Englisch</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        );
    }
}

export default Navigation;