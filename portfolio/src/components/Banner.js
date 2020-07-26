import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    if (window.location.pathname == "/") {
        return ( 
            <Container fluid>
                <Row className="banner-row-1 d-flex align-items-center">
                    <Col xs={12} md={6} className="d-none d-md-block flex-column pl-md-5 text-left">
                        <h1 className="display-1">Hi, I'm Rian!</h1>
                        <h2 className="display-4">Full-Stack Software Developer</h2>
                        <h4 className="lead pl-1">HTML, CSS, JavaScript, Python, Django, React.js, Node.js, Flask, SQL, MongoDB</h4>
                    </Col>
                    <Col md={6} className="banner-img d-none d-md-block"></Col>
                    <Col className="learn-more-button text-center d-none d-md-block">
                        <p>Learn More of What I Do</p>
                        <i className="fas fa-chevron-down"></i>
                    </Col>

                    <Col xs={12} className="col-12 d-md-none mt-4 mt-md-0 d-flex justify-content-center">
                        <div className="banner-img"></div>
                    </Col>
                    <Col xs={12} md={6} className="d-md-none flex-column d-flex justify-content-center align-items-left pl-md-5 text-center">
                        {/* <h1 className="display-1 d-none d-md-block">Hi, I'm Rian!</h1> */}
                        <h1 className="display-3">Hi, I'm Rian!</h1>
                        <h2 className="display-4">Full-Stack Software Developer</h2>
                        <h4 className="lead pl-1">HTML, CSS, JavaScript, Python, Django, React.js, Node.js, Flask, SQL, MongoDB</h4>
                        <div>
                            <p>Learn More of What I Do</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
    else if (window.location.pathname == "/de") {
        return ( 
            <Container fluid>
                <Row className="banner-row-1 d-flex align-items-center">
                    <Col xs={12} md={6} className="d-none d-md-block flex-column pl-md-5 text-left">
                        <h1 className="display-1">Hi, ich bin Rian!</h1>
                        <h2 className="display-4">Full-Stack-Softwareentwickler</h2>
                        <h4 className="lead pl-1">HTML, CSS, JavaScript, Python, Django, React.js, Node.js, Flask, SQL, MongoDB</h4>
                    </Col>
                    <Col md={6} className="banner-img d-none d-md-block"></Col>
                    <Col className="learn-more-button text-center d-none d-md-block">
                        <p>Lernen Sie mehr über mich</p>
                        <i className="fas fa-chevron-down"></i>
                    </Col>

                    <Col xs={12} className="col-12 d-md-none mt-4 mt-md-0 d-flex justify-content-center">
                        <div className="banner-img"></div>
                    </Col>
                    <Col xs={12} md={6} className="d-md-none flex-column d-flex justify-content-center align-items-left pl-md-5 text-center">
                        {/* <h1 className="display-1 d-none d-md-block">Hi, I'm Rian!</h1> */}
                        <h1 className="display-3">Hi, ich bin Rian!</h1>
                        <h2 className="display-4">Full-Stack-Softwareentwickler</h2>
                        <h4 className="lead pl-1">HTML, CSS, JavaScript, Python, Django, React.js, Node.js, Flask, SQL, MongoDB</h4>
                        <div>
                            <p>Lernen Sie mehr über mich</p>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Banner;