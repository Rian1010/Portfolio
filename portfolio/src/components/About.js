import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    if (window.location.pathname == "/") {
        return (
            <section className="blue-background pt-5" id="about">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2 className="display-4">
                                About Me
                            </h2>
                        </Col>
                    </Row>
                    <Row className="py-3 py-md-5">
                        <Col xs={12} md={6} className="about-img"></Col>
                        <Col xs={12} md={6} className="text-center pt-4 pt-md-0">
                            <p>
                                Programming is one of my greatest passions! Ever since I learned how to code, I was captivated 
                                from designing websites and coding their functionalities with programming languages, libraries 
                                and frameworks. In addition, I have used Search Engine Optimisation in an internship to rank 
                                high in Google search results. 
                            </p>
                            <p>
                                Moreover, problem solving is one of the most important aspects in software development and these
                                need to be done with motivation and dedication. Therefore, I always do my best to find the best
                                solutions by trying different ways of coding something or researching. If I am really stuck for 
                                days, I usually communicate with other programmers to come up with a practical solution.
                            </p>
                            <p>
                                My goal is to bring forth a pleasant user-experience by coding appealing designs and intuitive 
                                functionalities that come in handy. Furthermore, it is important to me to write clean code for 
                                other developers to comprehend them effortlessly.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
    else if (window.location.pathname == "/de") {
        return (
            <section className="blue-background pt-5" id="about">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2 className="display-4">
                                Über Mich
                            </h2>
                        </Col>
                    </Row>
                    <Row className="py-3 py-md-5">
                        <Col xs={12} md={6} className="about-img"></Col>
                        <Col xs={12} md={6} className="text-center pt-4 pt-md-0">
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
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo. 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;