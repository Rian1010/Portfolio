import React, { useState } from 'react';
import { Card, Toast } from 'react-bootstrap';
import './App.css';

function Cards(props) {
    const [urlAvailable, available] = useState(false)

    function showToast(e) {
        const link = e.target.getAttribute("href");
        if (link === "") {
            available(true);
            e.preventDefault();
        }
    }

    function closeToast() {
        available(false);
    }

    return (
        <Card style={{ width: '100%' }} className="mt-5" >
            <div variant="top" className={props.class}></div>
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <a onClick={showToast} className="btn btn-primary" href={props.url} target="_blank" rel="noopener noreferrer">Go to the Website</a>
                    <a className="btn btn-primary" href={props.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </Card.Body>
            <Toast show={urlAvailable} onClose={closeToast} style={{ position: "fixed", zIndex: 999, top: 0, right: 0 }} >
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

export default Cards;