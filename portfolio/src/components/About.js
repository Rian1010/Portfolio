import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Switch, Route } from 'react-router-dom'

function About() {
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

    // if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
    return (
        // <Switch>
        //     <Route path={"/" || "/Portfolio"} exact>
        <section className="blue-background pt-5" id="about">
            <Container className="py-3">
                <Row className="text-center">
                    <Col className={fadeIn ? 'is-visible' : 'invisible-title'} ref={ref}>
                        <h2 className="display-4">
                            About Me
                        </h2>
                    </Col>
                </Row>
                <Row className="py-3 py-md-5 d-flex align-items-center">
                    <Col xs={12} lg={6} className={fadeIn ? 'is-visible' : 'invisible-left'} ref={ref}>
                        <div className="diploma-img"></div>
                    </Col>
                    <Col xs={12} lg={6} className={`text-center pt-4 pt-lg-0 ${fadeIn ? 'is-visible' : 'invisible-right'}`} ref={ref}>
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
    // </Route>
    );
}
    // }
    // // else if (window.location.pathname === "/Portfolio/de") {
    // //     return ( */}
    // //             // <Route path="/Portfolio/de">
                    
    // //             {/* </Route>
    // //         </Switch> */}
    // //     );
    // // }

export default About;