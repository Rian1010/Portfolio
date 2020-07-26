import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { jsSkills, pySkills, dbSkills, ucdSkills, versionControl, otherTools } from '../skills';

function SkillBars() {
    if (window.location.pathname == "/") {
        return (
            <section className="blue-background py-5" id="skills">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2 className="display-4">Skills</h2>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={6}>
                            <h3>User Centric Development</h3>
                            {
                                ucdSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level} 
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Python</h3>
                            {
                                pySkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>JavaScript</h3>
                            {
                                jsSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Databases</h3>
                            {
                                dbSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Services & Version Control</h3>
                            {
                                versionControl.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Other Skills</h3>
                            {
                                otherTools.map(skill => (
                                    <ProgressBar 
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
    else if (window.location.pathname == "/de") {
        return (
            <section className="blue-background py-5" id="skills">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2 className="display-4">Kompetenzen</h2>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={6}>
                            <h3>Benutzerzentrierte Entwicklung</h3>
                            {
                                ucdSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level} 
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Python</h3>
                            {
                                pySkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>JavaScript</h3>
                            {
                                jsSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Datenbanken</h3>
                            {
                                dbSkills.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Services & Versionskontrolle</h3>
                            {
                                versionControl.map(skill => (
                                    <ProgressBar 
                                        className="my-3"
                                        animated
                                        variant={skill.colour} 
                                        now={skill.level}  
                                        label={skill.skillName}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={6}>
                            <h3>Andere Fähigkeiten</h3>
                            {
                                otherTools.map(skill => (
                                    <ProgressBar 
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