import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Card, Toast } from 'react-bootstrap';
import './App.css';

function Cards(props) {
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
                <a onClick={showToast} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <a onClick={showToast} className={ urlAvailable ? "btn btn-danger" : "btn btn-primary"} href={props.url} target="_blank" rel="noopener noreferrer">Go to the Website</a>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </Card.Body>
                <Toast show={urlAvailable} onClose={closeToast} style={{ position: "fixed", zIndex: 999, top: 75, right: 20 }} >
                    <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Not Yet Available</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Sorry! The link to the website you are trying to reach is not yet
                        available, but you can view the source code in the meantime.
                    </Toast.Body>
                </Toast>
            </Card>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Card style={{ width: '100%' }} className={`mt-5 ${fadeInCard ? 'is-visible' : 'invisible-card'}`} ref={refCard}>
                <a onClick={showToast} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <a onClick={showToast} className={ urlAvailable ? "btn btn-danger" : "btn btn-primary"} href={props.url} target="_blank" rel="noopener noreferrer">Zur Website</a>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Quellcode</a>
                    </div>
                </Card.Body>
                <Toast show={urlAvailable} onClose={closeToast} style={{ position: "fixed", zIndex: 999, top: 75, right: 20 }} >
                    <Toast.Header>
                    <strong className="mr-auto">Noch nicht verfügbar</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Verzeihung! Der Link, den Sie erreichen möchten, ist zurzeit noch nicht verfügbar.
                        Sie können jedoch den Quellcode in der Zwischenzeit besichtigen.
                    </Toast.Body>
                </Toast>
            </Card>
        );
    }
    
}

export default Cards;