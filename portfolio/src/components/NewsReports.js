import React, { useState, useRef, useEffect } from 'react';
import Tagesschau from '../videos/2025-04-07_NIZ_Tagesschau_720p.mp4';
import SWR from '../videos/klimaatlas_berichterstattung_220125.mp4';
import { Container, Row, Col } from 'react-bootstrap';


const NewsReports = () => {
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
    <section className='blue-background py-5' id='newsReports'>
        <Container>
            <Row>
                <Col>
                    <h1 className="display-4 text-center">News Reports including Portfolio Websites</h1>
                </Col>
            </Row>
            <Row
                className={`text-center pt-5 ${
                fadeInSkills ? 'is-visible' : 'invisible-title'
                }`}
                ref={ref}
            >
                <Col className="grid grid-videos col">
                    <div className='d-flex flex-column justify-content-between'>
                        <h3 className='display-5'>Report including the Low Water Information Centre Baden-Württemberg Website</h3>
                        <video controls>
                            <source src={Tagesschau} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <h3 className='display-5'>Report including the Competence Center for Climate Change Website</h3>
                        <video controls>
                            <source src={SWR} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsReports;