import * as React from 'react'
import { Card } from 'react-bootstrap';
import './App.css';

function InternshipsDE(props) {
    return (
        <Card className="mt-5 w-100">
            <a variant="top" className={props.image} href={props.url} target="_blank" rel="noopener noreferrer"></a>
            <Card.Body className="d-flex flex-column justify-content-between text-center">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <a className={"btn btn-outline-primary w-100"} href={props.url} target="_blank" rel="noopener noreferrer">Zur Website</a>
                </div>
            </Card.Body>
        </Card>
    )
}

export default InternshipsDE
