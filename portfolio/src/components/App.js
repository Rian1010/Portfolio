import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import EnglishSite from './EnglishSite';
import GermanSite from './GermanSite';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Portfolio/" exact>
            <EnglishSite />
          </Route> 

          <Route path="/Portfolio/de" exact>
            <GermanSite />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
