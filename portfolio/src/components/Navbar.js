import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom"

function Navigation() {
    const navColour = {
        backgroundColor: "#54cdff",
    }
    const history = useHistory();

    function handleClickGer() {
        history.push("/Portfolio/de")
    }

    function handleClickGerPortfolio() {
        history.push("/Portfolio/Full-Portfolio/de")
    }

    function handleClickEng() {
        history.push("/Portfolio/")
    }

    function handleClickEndPortfolio() {
        history.push("/Portfolio/Full-Portfolio")
    }
   
    return (
        <Switch>
            <Route path="/Portfolio" exact>
                <Navbar className="nav-footer-colour" expand="lg" bg="" variant="light" fixed="top">
                    <Navbar.Brand href="/Portfolio/">Rian Sunthbocus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="#about"><i className="far fa-user-circle"></i> About</Nav.Link>
                            <Nav.Link className="my-2" href="#examples"><i className="fas fa-laptop-code"></i> Project Examples</Nav.Link>
                            <Nav.Link className="my-2" href="#skills"><i className="fas fa-code"></i> Skills</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                            <Link to="/Portfolio/de" onClick={handleClickGer} className="btn lang-btn d-flex flex-row align-items-center">
                                <div className="flag-de mr-2"></div>
                                <div>German</div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>  
            </Route>
            <Route path="/Portfolio/Full-Portfolio" exact>
                <Navbar className="nav-footer-colour" expand="lg" bg="" variant="light" fixed="top">
                    <Navbar.Brand href="/Portfolio/">Rian Sunthbocus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="/Portfolio/#about"><i className="far fa-user-circle"></i> About</Nav.Link>
                            <Nav.Link className="my-2" href="/Portfolio/#examples"><i className="fas fa-laptop-code"></i> Project Examples</Nav.Link>
                            <Nav.Link className="my-2" href="/Portfolio/#skills"><i className="fas fa-code"></i> Skills</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                            <Link to="/Portfolio/Full-Portfolio/de" onClick={handleClickGerPortfolio} className="btn lang-btn d-flex flex-row align-items-center">
                                <div className="flag-de mr-2"></div>
                                <div>German</div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>  
            </Route>
            <Route path="/Portfolio/de">
                <Navbar expand="lg" bg="" variant="light" style={navColour} fixed="top">
                    <Navbar.Brand href="/Portfolio/de">Rian Sunthbocus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="#about"><i class="far fa-user-circle"></i> Über Mich</Nav.Link>
                            <Nav.Link className="my-2" href="#examples"><i class="fas fa-laptop-code"></i> Projekt Beispiele</Nav.Link>
                            <Nav.Link className="my-2" href="#skills"><i class="fas fa-code"></i> Kompetenzen</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                            <Link to="/Portfolio/" onClick={handleClickEng} className="btn lang-btn d-flex flex-row align-items-center">
                                <div className="flag-en mr-2"></div>
                                <div>Englisch</div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>  
            </Route>
            <Route path="/Portfolio/Full-Portfolio/de">
                <Navbar expand="lg" bg="" variant="light" style={navColour} fixed="top">
                    <Navbar.Brand href="/Portfolio/">Rian Sunthbocus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="/Portfolio/de/#about"><i class="far fa-user-circle"></i> Über Mich</Nav.Link>
                            <Nav.Link className="my-2" href="/Portfolio/de/#examples"><i class="fas fa-laptop-code"></i> Projekt Beispiele</Nav.Link>
                            <Nav.Link className="my-2" href="/Portfolio/de/#skills"><i class="fas fa-code"></i> Kompetenzen</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Link className="my-2" href="mailto:sunthbocusrian@gmail.com"><i className="far fa-envelope-open"></i> sunthbocusrian@gmail.com</Nav.Link>
                            <Link to="/Portfolio/Full-Portfolio" onClick={handleClickEndPortfolio} className="btn lang-btn d-flex flex-row align-items-center">
                                <div className="flag-en mr-2"></div>
                                <div>Englisch</div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>  
            </Route>
        </Switch>
    );
}


export default Navigation;