import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
        return (
            <Container fluid className="py-5 nav-footer-colour">
                <Row className="text-center">
                    <Col xs={12} md={6}>
                        <h2>Contact Me</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</a></li>
                            <li className="footer-lists"><a className="footer-colour" href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Social Network</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="https://www.linkedin.com/in/rian-sunthbocus-66a509197/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Container fluid className="py-5 nav-footer-colour">
                <Row className="text-center">
                    <Col xs={12} md={6}>
                        <h2>Kontaktieren</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="mailto:sunthbocusrian@gmail.com">sunthbocusrian@gmail.com</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Soziales Netzwerk</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="https://www.linkedin.com/in/rian-sunthbocus-66a509197/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;