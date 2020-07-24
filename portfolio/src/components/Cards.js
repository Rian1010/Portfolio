import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function Cards(props) {
    return (
        <Card style={{ width: '100%' }} >
            <div variant="top" className={props.class}></div>
            {/* <Card.Img variant="top" src={props.class} /> */}
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <a className="btn btn-primary" href={props.url}>Go to the Website</a>
                    <a className="btn btn-primary" href={props.source}>Source Code</a>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Cards;