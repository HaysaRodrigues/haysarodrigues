import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MainImage from './components/MainImage';
import RioSaoFrancisco from './components/stories/RioSaoFrancisco'
import Catimbau from './components/stories/Catimbau'
import InteriorPernambuco from './components/stories/InteriorPernambuco'
import Recife from './components/stories/Recife';
import About from './components/about/About';


function App() {
  return (
    <Router>
      <div className="mainContainer">
        <div className='menuContainer'>
          <div className='columnMenu'>
            <header>
              <div>
                <div className="appLeftMenu">
                  <Menu />
                </div>  
              </div>
            </header>
          </div>
          <div className='container'>
            <Switch>
                <Route exact path='/' component={ MainImage } />
                <Route path='/riosaofrancisco' component={ RioSaoFrancisco } />
                <Route path='/catimbau' component={ Catimbau } />
                <Route path='/interiordepernambuco' component={ InteriorPernambuco }/>   
                <Route path='/recife' component={ Recife }/>
                <Route path='/about' component={ About }/>
            </Switch>
          </div>
        </div>  
      </div>
      <footer>feito com<span role="img" aria-label="amor"> &#x2661;</span></footer>
    </Router>
  );
}

export default App;
