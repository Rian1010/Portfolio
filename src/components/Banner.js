import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(props) {
    return <Container fluid>
        <Row className="banner-row-1">
            <Col md={6} className="flex-column d-flex justify-content-center align-items-left pl-5">
                <h1 className="display-1">Hi, I'm Rian!</h1>
                <h2 className="display-4">Full-Stack Software Developer</h2>
                <h4 className="lead pl-1">HTML, CSS, JavaScript, Python, Django, React.js, Node.js, Flask, SQL, MongoDB</h4>
            </Col>
            <Col md={6} className="banner-img"></Col>
            <Col className="learn-more-button text-center">
                <p>Learn More of What I Do!</p>
                <i className="fas fa-chevron-down"></i>
            </Col>
        </Row>
    </Container>
}

export default Banner;