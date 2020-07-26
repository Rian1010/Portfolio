import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    if (window.location.pathname === "/") {
        return (
            <Container className="py-5">
                <Row className="text-center">
                    <Col xs={12} md={6}>
                        <h2>Contact Me</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="mailto:sunthbocusrian@gmail.com">sunthbocusrian@gmail.com</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Social Network</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="https://www.linkedin.com/in/rian-sunthbocus-66a509197/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Container className="py-5">
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