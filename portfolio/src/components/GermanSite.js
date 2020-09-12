import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Navigation from './Navbar';
import internshipSite from '../internship';
import websiteInfo from '../websites';
import BannerDE from './BannerDE';
import CardsDE from './CardsDE';
import InternshipDE from './InternshipDE';
import AboutDE from './AboutDE';
import SkillBarsDE from './SkillBarsDE';
import FooterDE from './FooterDE';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import './App.css';

function GermanSite() {
  const [urlAvailable, available] = useState(false);

  function showToast(e) {
      const link = e.target.getAttribute("href");
      if (link === "") {
          available(!urlAvailable);
          e.preventDefault();
      }
  }

  function closeToast() {
      available(false);
  }

  const [fadeInCard, fadeCardHandler] = useState(false);
  const refCard = useRef(null)

  useEffect(() => {
      window.addEventListener('scroll', fadeCardFunction);
      function fadeCardFunction () {
          const width = window.innerWidth;
          const screenSizeHorizontal = 992;
          if(width >= screenSizeHorizontal) {
              if(window.scrollY >= 1100) {
                  fadeCardHandler(true);
              }
          } else {
              fadeCardHandler(true);
          }
      }
  });

    return (
            <div>
              <Navigation />
              <BannerDE />
              <AboutDE />
              <Container id="examples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Projekt Beispiele</h2>
                  </Col>
                </Row>
                <Row>
                    <Col className="mt-3">
                        <Link to="/Portfolio/Full-Portfolio/de">
                            <button className="btn btn-outline-primary btn-lg">Ganzes Portfolio</button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                  <Col className="grid-3">
                    {websiteInfo.map((cardInfo, i) => (
                      <CardsDE
                        key={i}
                        image={ `bg ${cardInfo.img}` }
                        technologies={cardInfo.technologies}
                        title={cardInfo.titel}
                        url={cardInfo.websiteURL}
                        source={cardInfo.sourceCode}
                        click={showToast}
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
              <Toast show={urlAvailable} onClose={closeToast} style={{ position: "fixed", zIndex: 999, top: 75, right: 20 }} >
                  <Toast.Header>
                  <strong className="mr-auto">Noch nicht verfügbar</strong>
                  </Toast.Header>
                  <Toast.Body>
                      Verzeihung! Der Link, den Sie erreichen möchten, ist zurzeit noch nicht verfügbar.
                      Sie können jedoch den Quellcode in der Zwischenzeit besichtigen.
                  </Toast.Body>
              </Toast>
              <Container id="intExamples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Beispiele von Webseiten im Praktikum</h2>
                  </Col>
                </Row>
                <Row style={{width: "103%"}}>
                  <Col className="grid-3">
                    {internshipSite.map((cardInfo, i) => (
                      <InternshipDE
                        key={i}
                        image={ `bg ${cardInfo.img}` }
                        technologies={cardInfo.technologies}
                        title={cardInfo.title}
                        url={cardInfo.websiteURL}
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
              <SkillBarsDE />
              <FooterDE />
            </div> 
    )
}

export default GermanSite
