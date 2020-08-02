import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { jsSkills, pySkills, dbSkills, ucdSkills, versionControl, otherTools } from '../skills';

function SkillBars() {
    const [fadeInSkills, fadeSkillsHandler] = useState(false);
    const ref = useRef(null)
    
    useEffect(() => {
        window.addEventListener('scroll', fadeSkillsFunction);
        function fadeSkillsFunction () {
            const width = window.innerWidth;
            const screenSizeHorizontal = 992;
            if(width >= screenSizeHorizontal) {
                if(window.scrollY >= 2300) {
                    fadeSkillsHandler(true);
                }
            }
        }
    });

    if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
        return (
            <section className="blue-background py-5" id="skills">
                <Container>
                    <Row className={`text-center ${fadeInSkills ? 'is-visible' : 'invisible-title'}`} ref={ref}>
                        <Col>
                            <h2 className="display-4">Skills</h2>
                        </Col>
                    </Row>
                    <Row className={fadeInSkills ? 'is-visible' : 'invisible-title'}>
                        <Col>
                            <p className="text-center">
                                I enjoy working with all of the skills listed below a lot, but I especially like JavaScript and 
                                Python, as these require the most effort for problem solving and different ideas to get things 
                                to work. In fact, this website was made using React.js.
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">User Centric Development</h3>
                            {
                                ucdSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level} 
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Python</h3>
                            {
                                pySkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">JavaScript</h3>
                            {
                                jsSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Databases</h3>
                            {
                                dbSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">Services & Version Control</h3>
                            {
                                versionControl.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Other Skills</h3>
                            {
                                otherTools.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <section className="blue-background py-5" id="skills">
                <Container>
                    <Row className={`text-center ${fadeInSkills ? 'is-visible' : 'invisible-title'}`} ref={ref}>
                        <Col>
                            <h2 className="display-4 word-break">Kompetenzen</h2>
                        </Col>
                    </Row>
                    <Row className={fadeInSkills ? 'is-visible' : 'invisible-title'}>
                        <Col>
                            <p className="text-center">
                                Ich arbeite sehr gerne mit all den unten angezeigten Fähigkeiten, aber ich mag besonders JavaScript und
                                Python, da diese am meisten Mühe für Problemlösungen und verschiedene Ideen erfordern, um Sachen
                                ins Laufen zu bringen. Tatsächlich wurde diese Website mit React.js erstellt.
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">Benutzerzentrierte Entwicklung</h3>
                            {
                                ucdSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level} 
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Python</h3>
                            {
                                pySkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">JavaScript</h3>
                            {
                                jsSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Datenbanken</h3>
                            {
                                dbSkills.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-left'} ref={ref}>
                            <h3 className="text-center">Services & Versionskontrolle</h3>
                            {
                                versionControl.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6} className={fadeInSkills ? 'is-visible' : 'invisible-right'} ref={ref}>
                            <h3 className="text-center">Andere Fähigkeiten</h3>
                            {
                                otherTools.map((skill, i) => (
                                    <ProgressBar 
                                        key={i}
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default SkillBars;