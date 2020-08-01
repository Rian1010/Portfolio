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


    if (window.location.pathname === "/" || window.location.pathname === "/Portfolio/") {
        return (
            <Card style={{ width: '100%'}} className="mt-5">
                <a onClick={props.click} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <div onClick={props.click}>
                            <a onClick={showToast} className={ urlAvailable ? "btn btn-danger" : "btn btn-primary"} href={props.url} target="_blank" rel="noopener noreferrer">Go to the Website</a>
                        </div>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </Card.Body>
            </Card>
        );
    }
    else if (window.location.pathname === "/de") {
        return (
            <Card style={{ width: '100%' }} className="mt-5">
                <a onClick={props.click} variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <div onClick={props.click}>
                            <a onClick={showToast} className={ urlAvailable ? "btn btn-danger" : "btn btn-primary"} href={props.url} target="_blank" rel="noopener noreferrer">Go to the Website</a>
                        </div>
                        <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Quellcode</a>
                    </div>
                </Card.Body>
            </Card>
        );
    }
    
}

export default Cards;