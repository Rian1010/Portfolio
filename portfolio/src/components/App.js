import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Snippets from './SnippetShow';
import websiteInfo from '../websites';
import siteSnippets from '../snippets'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      {siteSnippets.map(item => (
        <Snippets
          tech={item.technology}
        />
      ))}
      <Container className="py-5 d-flex justify-content-center align-items-center">
            <Row>
                <Col className="grid-3">
                  {websiteInfo.map(cardInfo => (
                    <Cards
                      title={cardInfo.title}
                    />
                    ))}
                  </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
