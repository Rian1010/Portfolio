import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import {
  jsSkills,
  pySkills,
  mobileDevSkills,
  dbSkills,
  ucdSkills,
  versionControl,
  otherTools,
} from '../skills';

function SkillsBarsDE() {
  const [fadeInSkills, fadeSkillsHandler] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', fadeSkillsFunction);

    function fadeSkillsFunction() {
      const width = window.innerWidth;
      const screenSizeHorizontal = 992;
      if (width >= screenSizeHorizontal) {
        if (window.scrollY >= 3100) {
          fadeSkillsHandler(true);
        }
      }
    }
  });

  return (
    <div>
      <section className='py-5' id='skills'>
        <Container>
          <Row
            className={`text-center ${
              fadeInSkills ? 'is-visible' : 'invisible-title'
            }`}
            ref={ref}
          >
            <Col>
              <h2 className='display-4 word-break'> Kompetenzen </h2>{' '}
            </Col>{' '}
          </Row>{' '}
          <Row className={fadeInSkills ? 'is-visible' : 'invisible-title'}>
            <Col>
              <p className='text-center'>
                Die Arbeit mit den unten aufgeführten Programmen /
                Programmiersprachen gefällt mir sehr. Dabei schätze ich vor
                allem Javascript und Python, da diese einen großen Stellenwert
                bei der Lösung von Problemen und der Ideenfindung einnehmen.So
                habe ich diese Website mit React.js erstellt.{' '}
              </p>{' '}
            </Col>{' '}
          </Row>{' '}
          <Row className='pt-5'>
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-left'}
              ref={ref}
            >
              <h3 className='text-center'> Benutzerzentrierte Entwicklung </h3>{' '}
              {ucdSkills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-left'}
              ref={ref}
            >
              <h3 className='text-center'> JavaScript </h3>{' '}
              {jsSkills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-right'}
              ref={ref}
            >
              <h3 className='text-center'> Python </h3>{' '}
              {pySkills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-right'}
              ref={ref}
            >
              <h3 className='text-center'> Datenbanken </h3>{' '}
              {dbSkills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-right'}
              ref={ref}
            >
              <h3 className='text-center'> App-Entwicklung </h3>{' '}
              {mobileDevSkills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-left'}
              ref={ref}
            >
              <h3 className='text-center'> Services & Versionskontrolle </h3>{' '}
              {versionControl.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
            <Col
              md={6}
              className={fadeInSkills ? 'is-visible' : 'invisible-right'}
              ref={ref}
            >
              <h3 className='text-center'> Andere Fähigkeiten </h3>{' '}
              {otherTools.map((skill, i) => (
                <ProgressBar
                  key={i}
                  className='my-3'
                  animated
                  variant={skill.colour}
                  now={skill.level}
                  label={skill.skillName}
                />
              ))}{' '}
            </Col>{' '}
          </Row>{' '}
        </Container>{' '}
      </section>{' '}
    </div>
  );
}

export default SkillsBarsDE;
