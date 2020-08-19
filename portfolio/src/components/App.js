import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import Navigation from './Navbar';
import Banner from './Banner';
import Cards from './Cards';
import Internship from './Internship';
import About from './About';
import SkillBars from './SkillBars';
import Footer from './Footer';
import websiteInfo from '../websites';
import internshipSite from '../internship';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
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
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Project Examples</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="grid-3">
                    {websiteInfo.map((cardInfo, i) => (
                      <Cards
                        key={i}
                        image={ `bg ${cardInfo.img}` }
                        technologies={cardInfo.technologies}
                        title={cardInfo.title}
                        url={cardInfo.websiteURL}
                        source={cardInfo.sourceCode}
                        click={showToast}
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
              <Toast show={urlAvailable} onClose={closeToast} className="toast-position">
                  <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">Not Yet Available</strong>
                  </Toast.Header>
                  <Toast.Body>
                      Sorry! The link to the website you are trying to reach is not yet
                      available, but you can view the source code in the meantime.
                  </Toast.Body>
              </Toast>
              <Container id="intExamples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Internship Work Examples</h2>
                  </Col>
                </Row>
                <Row style={{width: "103%"}}>
                  <Col className="grid-3">
                    {internshipSite.map((cardInfo, i) => (
                      <Internship
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
              <SkillBars />
              <Footer />
            </div>
          } />

          <Route path="/Portfolio/de" exact render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Projekt Beispiele</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="grid-3">
                    {websiteInfo.map((cardInfo, i) => (
                      <Cards
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
                      <Internship
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
              <SkillBars />
              <Footer />
            </div>
          } />

          <Route path="/Portfolio" render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Work Examples</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="grid-3">
                    {websiteInfo.map((cardInfo, i) => (
                      <Cards
                        key={i}
                        image={ `bg ${cardInfo.img}` }
                        technologies={cardInfo.technologies}
                        title={cardInfo.title}
                        url={cardInfo.websiteURL}
                        source={cardInfo.sourceCode}
                        click={showToast}
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
              <Toast show={urlAvailable} onClose={closeToast} className="toast-position">
                  <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">Not Yet Available</strong>
                  </Toast.Header>
                  <Toast.Body>
                      Sorry! The link to the website you are trying to reach is not yet
                      available, but you can view the source code in the meantime.
                  </Toast.Body>
              </Toast>
              <Container id="intExamples" className={`py-5 d-flex flex-column justify-content-center align-items-center ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Internship Work Examples</h2>
                  </Col>
                </Row>
                <Row style={{width: "103%"}}>
                  <Col className="grid-3">
                    {internshipSite.map((cardInfo, i) => (
                      <Internship
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
              <SkillBars />
              <Footer />
            </div>
          } />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
