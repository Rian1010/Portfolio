import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BannerDE() {
  const [fadeInSkills, fadeSkillsHandler] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('load', fadeSkillsFunction);
    function fadeSkillsFunction() {
      const width = window.innerWidth;
      const screenSizeHorizontal = 992;
      if (width >= screenSizeHorizontal) {
        fadeSkillsHandler(true);
      }
    }
  });

  return (
    <div>
      <Container fluid className='mt-5'>
        <Row className='banner-row-1 d-flex align-items-center'>
          {/* Tablet sizes and above */}
          <Col
            xs={12}
            md={6}
            className={`d-none d-md-block flex-column pl-md-5 text-left ${
              fadeInSkills ? 'is-visible' : 'is-visible'
            }`}
            ref={ref}
          >
            <h1 className='display-1'>Hi, ich bin Rian!</h1>
            <h2 className='display-4 word-break'>
              Frontend-Entwickler
            </h2>
            <h4 className='lead pl-1'>
              HTML, CSS, SCSS, JavaScript, ReactJS, jQuery, Python, Django, PostgreSQL, MySQL, noSQL
            </h4>
          </Col>
          <Col
            md={6}
            className={`banner-img d-none d-md-block ${
              fadeInSkills ? 'is-visible' : 'is-visible'
            }`}
            ref={ref}
          ></Col>
          <Col
            className={`learn-more-button text-center d-none d-md-block pb-4 ${
              fadeInSkills ? 'is-visible' : 'is-visible'
            }`}
            ref={ref}
          >
            <a href='#about' className='learn-more-btn'>
              <p>Lernen Sie mehr über mich</p>
              <i className='fas fa-chevron-down'></i>
            </a>
          </Col>
          {/* Below tablet size */}
          <Col
            xs={12}
            className='col-12 d-md-none mt-4 mt-md-0 d-flex justify-content-center'
          >
            <div className='banner-img'></div>
          </Col>
          <Col
            xs={12}
            md={6}
            className='d-md-none flex-column d-flex justify-content-center align-items-left pl-md-5 text-center'
          >
            <h1 className='display-4'>Hi, ich bin Rian!</h1>
            <h2 className='word-break'>Full-Stack-Softwareentwickler</h2>
            <h4 className='lead pl-1'>
              HTML, CSS, JavaScript, Flutter, Python, Django, React.js, jQuery,
              Flask, SQL, MongoDB, AWS
            </h4>
            <div>
              <a
                href='#learnMoreGerBtn'
                id='learnMoreGerBtn'
                className='learn-more-btn'
              >
                <p className='pb-4'>Lernen Sie mehr über mich</p>
                <i className='fas fa-chevron-down'></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerDE;
