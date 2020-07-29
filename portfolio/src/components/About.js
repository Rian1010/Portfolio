import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
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
                    <Row className="py-3 py-md-5 d-flex align-items-center">
                        <Col xs={12} lg={6} className="about-img"></Col>
                        <Col xs={12} lg={6} className="text-center pt-4 pt-lg-0">
                            <p>
                                Programming is one of my greatest passions! Ever since I learned how to code, I was captivated 
                                from designing websites responsive coding their functionalities with programming languages, libraries 
                                and frameworks. In addition, I have used Search Engine Optimisation in an internship to rank 
                                high in Google search results. 
                            </p>
                            <p>
                                Moreover, problem solving is one of the most important aspects in software development and these
                                need to be done with motivation and dedication. Therefore, I always do my best to find the most 
                                efficient solutions by trying different ways of coding something or researching about it. If I am 
                                really stuck for days, I usually communicate with other programmers to come up with a practical 
                                solution.
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
    else if (window.location.pathname === "/de") {
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
                    <Row className="py-3 py-md-5 d-flex align-items-center">
                        <Col xs={12} lg={6} className="about-img"></Col>
                        <Col xs={12} lg={6} className="text-center pt-4 pt-lg-0">
                            <p>
                                Programmieren ist einer meiner größten Leidenschaften! Seit ich gelernt habe zu codieren, war ich 
                                von responsiven Gestaltungen von Webseiten bis zur Codierung ihrer Funktionalitäten mit 
                                Programmiersprachen, Bibliotheken und Frameworks fasziniert. Außerdem habe ich in einem Praktikum 
                                Suchmaschinenoptimierung verwendet, um hoch in den Google-Suchergebnissen zu ranken.
                            </p>
                            <p>
                                Darüber hinaus ist die Problemlösung einer der wichtigsten Aspekte in der Softwareentwicklung also 
                                müssen diese mit hoher Motivation und Engagement getan werden. Deshalb gebe ich immer mein Bestes, 
                                um die effizienteste Lösungen zu finden, indem ich verschiedene Arten der Codierung ausprobiere oder viel 
                                recherchiere. Wenn ich aber tagelang feststecke, kommuniziere ich normalerweise mit anderen 
                                Programmierern, um eine praktische Lösung zu finden.
                            </p>
                            <p>
                                Mein Ziel ist es, eine angenehme Benutzererfahrung hervorzubringen, indem ich ansprechende und 
                                intuitive Designs und Funktionalitäten codiere, die sich als nützlich erweisen. Außerdem ist es mir 
                                wichtig, sauberen Code zu schreiben, sodass andere Entwickler sie mühelos verstehen können.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;