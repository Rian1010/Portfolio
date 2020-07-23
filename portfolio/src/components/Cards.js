import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function Cards(props) {
    return (
        <Card style={{ width: '100%' }} >
            <Card.Img variant="top" src="{props.img}" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <Button variant="primary">Source Code</Button>
                <Button variant="primary">Go to the Website</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;