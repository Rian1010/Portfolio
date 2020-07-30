import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Card, Toast } from 'react-bootstrap';
import './App.css';

function Cards(props) {
 
    const [fadeInCard, fadeCardHandler] = useState(false);
    const refCard = useRef(null)
    
    useEffect(() => {
        window.addEventListener('scroll', fadeCardFunction);
        function fadeCardFunction () {
            const width = window.innerWidth;
            const screenSizeHorizontal = 992;
            if(width >= screenSizeHorizontal) {
                if(window.scrollY >= 950) {
                    fadeCardHandler(true);
                }
            } else {
                fadeCardHandler(true);
            }
        }
    });


    if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
        return (
            <Card style={{ width: '100%'}} className={`mt-5 ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <a onClick={props.click} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <a onClick={props.click} className={props.toast} href={props.url} target="_blank" rel="noopener noreferrer">Go to the Website</a>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </Card.Body>
            </Card>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Card style={{ width: '100%' }} className={`mt-5 ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <a onClick={props.click} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <a onClick={props.click} className={props.toast} href={props.url} target="_blank" rel="noopener noreferrer">Zur Website</a>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Quellcode</a>
                    </div>
                </Card.Body>
            </Card>
        );
    }
    
}

export default Cards;