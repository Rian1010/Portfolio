import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../resumes/Resume.pdf';


function Footer() {
    // if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
        return (
            <Container fluid className="py-5 nav-footer-colour">
                <Row className="text-center">
                    <Col xs={12} md={4}>
                        <h2>Contact Me</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</a></li>
                            <li className="footer-lists"><a className="footer-colour" href="tel:+49 171 8011984"><i className="fas fa-phone"></i> +49 171 8011984</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Resume</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href={Resume} target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i> Download Resume</a></li>     
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Social Network</h2>
                        <ul className="p-0">
                            <li className="footer-lists"><a className="footer-colour" href="https://www.linkedin.com/in/rian-sunthbocus-66a509197/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                            <li className="footer-lists"><a className="footer-colour" href="https://www.github.com/Rian1010/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Github</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }


export default Footer;