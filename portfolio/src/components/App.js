import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import EnglishSite from './EnglishSite';
import GermanSite from './GermanSite';
import FullPorfolioSite from './FullPortfolio';
import ProjectDetails from './ProjectDetails';
import Layout from './Layout';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/Portfolio/" exact>
              <EnglishSite />
            </Route> 

            <Route path="/Portfolio/de" exact>
              <GermanSite />
            </Route> 

            <Route path="/Portfolio/Full-Portfolio" exact>
              <FullPorfolioSite />
            </Route> 

            <Route path="/Portfolio/Full-Portfolio/de" exact>
              <FullPorfolioSite />
            </Route> 

            <Route path="/Portfolio/details/:id" component={ProjectDetails} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
