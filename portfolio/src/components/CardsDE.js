import * as React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

function CardsDE(props) {
    const { click, image, url, title, technologies, detailsPage, source } = props;

    const [urlAvailable, available] = useState(false);

    function showToast(e) {
        const link = e.target.getAttribute("href");
        if (link === "") {
            available(!urlAvailable);
            e.preventDefault();
        }
    }
    
    return (
        <div>
            <Card className="mt-5 w-100">
                <a onClick={click} variant="top" className={image} href={url} target="_blank" rel="noopener noreferrer"></a>
                <Card.Body className="d-flex flex-column justify-content-between text-center card-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {technologies}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        {url && (
                            <div onClick={() => click} className={!source && !detailsPage ? 'w-100' : ''}>
                                <a onClick={() => showToast} className={`${ urlAvailable ? "btn btn-outline-danger" : "btn btn-outline-primary"}  w-100`} href={url} target="_blank" rel="noopener noreferrer">Zur Webseite</a>
                            </div>
                        )}
                        {source && 
                            <a className={`${!url ? 'w-100 ' : '' }btn btn-outline-primary`} href={source} target="_blank" rel="noopener noreferrer">Quellcode</a>}
                        {detailsPage && 
                            <a 
                                className="btn btn-outline-danger w-100" 
                                href='#examples' 
                                // target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Zur Detailseite (Noch im Prozess)
                            </a>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsDE
