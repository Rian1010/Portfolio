import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import About from './About';
import SkillBars from './SkillBars';
import Footer from './Footer';
import Snippets from './SnippetShow';
import websiteInfo from '../websites';
import siteSnippets from '../snippets'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { ProgressBar } from 'react-bootstrap';
// import phoneSite from '../img/phoneSite.png';


function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      {/* {siteSnippets.map(item => (
        <Snippets
          tech={item.technology}
        />
      ))} */}
      <Container className="py-5 d-flex flex-column justify-content-center align-items-center">
        <Row>
          <Col>
            <h2 className="display-4">Examples</h2>
          </Col>
        </Row>
        <Row>
            <Col className="grid-3">
              {websiteInfo.map(cardInfo => (
                <Cards
                  class={ `bg ${cardInfo.img}` }
                  technologies={cardInfo.technologies}
                  title={cardInfo.title}
                  url={cardInfo.sourceCode}
                  source={cardInfo.websiteURL}
                />
                ))}
              </Col>
        </Row>
      </Container>
      <SkillBars />
      <Footer />
    </div>
  );
}

export default App;
