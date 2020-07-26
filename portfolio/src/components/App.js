import React from 'react';
import Navigation from './Navbar';
import Banner from './Banner';
import Cards from './Cards';
import About from './About';
import SkillBars from './SkillBars';
import Footer from './Footer';
import websiteInfo from '../websites';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className="py-5 d-flex flex-column justify-content-center align-items-center">
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
                        />
                        ))}
                      </Col>
                </Row>
              </Container>
              <SkillBars />
              <Footer />
            </div>
          } />

          <Route path="/de" exact render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className="py-5 d-flex flex-column justify-content-center align-items-center">
                <Row>
                  <Col>
                    <h2 className="display-4 text-center">Beispiele</h2>
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
                        />
                        ))}
                      </Col>
                </Row>
              </Container>
              <SkillBars />
              <Footer />
            </div>
          } />

          <Route path="/Portfolio" exact render={props =>
            <div>
              <Navigation />
              <Banner />
              <About />
              <Container id="examples" className="py-5 d-flex flex-column justify-content-center align-items-center">
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
