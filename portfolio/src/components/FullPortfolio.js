import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import Navigation from './Navbar';
import Cards from './Cards';
import Internship from './Internship';
import Footer from './Footer';
import './App.css';

import fullPortfolio from '../full-portfolio';
import internshipSite from '../internship';

import CardsDE from './CardsDE';
import InternshipDE from './InternshipDE';
import FooterDE from './FooterDE';
import { BrowserRouter as Switch, Route } from "react-router-dom"
import NewsReportsDE from './NewsReportsDE';
import NewsReports from './NewsReports';


function FullPorfolioSite() {
    const [isUrlAvailable, setIsUrlavailable] = useState(false);
    const [isSiteAvailable, setIsSiteAvailable] = useState(false);

    function showToast(e, availablity) {
        const link = e.target.getAttribute("href");
        if (link === "") {
            setIsUrlavailable(!availablity);
            e.preventDefault();
        }
    }
  
    function closeToast() {
        setIsUrlavailable(false);
    }
    
    return (
        <div>
        <Switch>
        <Route path="/Portfolio/Full-Portfolio" exact>
            <Navigation />
            <Container id="examples" className="py-5 d-flex flex-column justify-content-center align-items-center">
            <Row>
                <Col>
                <h1 className="display-4 mt-5 pt-4 text-center">Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col className="grid grid-3">
                {fullPortfolio.map((cardInfo, i) => (
                  <div className='w-100'>
                    <Cards
                      key={i}
                      image={ `bg ${cardInfo.img}` }
                      technologies={cardInfo.technologies}
                      title={cardInfo.title}
                      url={cardInfo.websiteURL}
                      source={cardInfo.sourceCode}
                      detailsPage={cardInfo.detailsPage}
                      click={isUrlAvailable}
                    />
                  </div>
                ))}
                </Col>
            </Row>
            </Container>
            <Toast show={isUrlAvailable} onClose={closeToast} className="toast-position">
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Not Yet Available</strong>
                </Toast.Header>
                <Toast.Body>
                    Sorry! The link to the website you are trying to reach is not yet
                    available, but you can view the source code in the meantime.
                </Toast.Body>
            </Toast>
            <Container id="intExamples" className="py-5 d-flex flex-column justify-content-center align-items-center">
              <Row>
                  <Col>
                  <h2 className="display-4 text-center">Internship Work Examples</h2>
                  </Col>
              </Row>
              <Row style={{width: "103%"}}>
                  <Col className="grid-3">
                  {internshipSite.slice(0,3).map((cardInfo, i) => (
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
            <NewsReports />
            <Footer />
          
            </Route>
            <Route path="/Portfolio/Full-Portfolio/de" exact>
              <Navigation />
              <Container id="examples" className="py-5 d-flex flex-column justify-content-center align-items-center">
                <Row>
                  <Col>
                    <h1 className="display-4 mt-5 pt-4 text-center">Portfolio</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="grid-3">
                    {fullPortfolio.map((cardInfo, i) => (
                      <div className='w-100'>
                        <CardsDE
                          key={i}
                          image={ `bg ${cardInfo.img}` }
                          technologies={cardInfo.technologies}
                          title={cardInfo.titel}
                          url={cardInfo.websiteURL}
                          source={cardInfo.sourceCode}
                          detailsPage={cardInfo.detailsPage}
                          click={showToast}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
              </Container>
              {/*<Toast show={isUrlAvailable} onClose={closeToast} style={{ position: "fixed", zIndex: 999, top: 75, right: 20 }} >
                  <Toast.Header>
                  <strong className="mr-auto">Noch nicht verfügbar</strong>
                  </Toast.Header>
                  <Toast.Body>
                      Verzeihung! Der Link, den Sie erreichen möchten, ist zurzeit noch nicht verfügbar.
                      Sie können jedoch den Quellcode in der Zwischenzeit besichtigen.
                  </Toast.Body>
              </Toast>*/}
              <Container id="intExamples" className="py-5 d-flex flex-column justify-content-center align-items-center">
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
              <NewsReportsDE />
              <FooterDE />
            </Route>
        </Switch>
        </div>
        
    )
}

export default FullPorfolioSite;