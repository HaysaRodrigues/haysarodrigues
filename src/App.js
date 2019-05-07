import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MainImage from './components/MainImage';
import RioSaoFrancisco from './components/story/RioSaoFrancisco'
import Catimbau from './components/story/Catimbau'
import InteriorPernambuco from './components/story/InteriorPernambuco'


function App() {
  return (
    <Router>
      <div className="main-div">
        <div className='row'> 
          <div className='column-menu'>
            <header>
              <div>
                <div className="app-left-menu">
                  <Menu />
                </div>  
              </div>
            </header>
          </div>
          <div className='column-photo'>
            <Switch>
              <Route exact path='/' component={ MainImage } />
              <Route path='/riosaofrancisco' component={ RioSaoFrancisco } />
              <Route path='/catimbau' component={ Catimbau } />
              <Route path='/interiordepernambuco' component={ InteriorPernambuco }/>   
          </Switch>
          </div>
        </div>  
      </div>
      <footer>feito com<span role="img" aria-label="amor"> &#x2661;</span></footer>
    </Router>
  );
}

export default App;
