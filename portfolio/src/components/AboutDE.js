import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function AboutDE() {
    const [fadeIn, fadeHandler] = useState(false);
    const ref = useRef(null)
    
    useEffect(() => {
        const height = ref.current.clientHeight;
        window.addEventListener('scroll', fadeFunction);
        function fadeFunction () {
            const width = window.innerWidth;
            const screenSizeHorizontal = 992;
            const screenSizeVerical = height / 1.5
            if(width >= screenSizeHorizontal) {
                if(window.scrollY >= screenSizeVerical) {
                    fadeHandler(true);
                }
            }
        }
    });
    
    return (
        <div>
            <section className="blue-background pt-5" id="about">
                <Container className="py-3">
                    <Row className="text-center">
                        <Col className={fadeIn ? 'is-visible' : 'invisible-title'} ref={ref}>
                            <h2 className="display-4">
                                Über Mich
                            </h2>
                        </Col>
                    </Row>
                    <Row className="py-3 py-md-5 d-flex align-items-center">
                        <Col xs={12} lg={6} className={fadeIn ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <div className="diploma-img"></div>
                        </Col>
                        <Col xs={12} lg={6} className={`text-center pt-4 pt-lg-0 ${fadeIn ? 'is-visible' : 'invisible-right'}`} ref={ref}>
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
        </div>
    )
}

export default AboutDE
