import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <section className="blue-background pt-5">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2 className="display-4">
                            About Me
                        </h2>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col xs={12} md={6} className="about-img"></Col>
                    <Col xs={12} md={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. 
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;