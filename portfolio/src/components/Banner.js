import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
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
    <Container fluid className='pt-5'>
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
          <h1 className='display-1'>Hi, I'm Rian!</h1>
          <h2 className='display-4'>Frontend Developer</h2>
          <h4 className='lead pl-1'>
            HTML, CSS, SCSS, JavaScript, ReactJS, jQuery, Search Engine Optimisation (SEO), App Store Optimisation (ASO), Python, Django
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
          <a href='#learnMoreBtn' id='learnMoreBtn' className='learn-more-btn'>
            <p>Learn More About What I Do</p>
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
          <h1 className='display-4'>Hi, I'm Rian!</h1>
          <h2>Frontend Developer</h2>
          <h4 className='lead pl-1'>
            HTML, CSS, SCSS, JavaScript, ReactJS, jQuery, Search Engine Optimisation (SEO), App Store Optimisation (ASO), Python, Django
          </h4>
          <a href='#about' className='learn-more-btn pb-4 mt-3'>
            <p>Learn More About What I Do</p>
            <i className='fas fa-chevron-down'></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
