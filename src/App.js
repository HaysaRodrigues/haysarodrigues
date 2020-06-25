import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/menu/Menu';
import MainImage from './components/mainImage/MainImage';
import RioSaoFrancisco from './components/stories/saofrancisco/RioSaoFrancisco'
import Catimbau from './components/stories/catimbau/Catimbau'
import InteriorPernambuco from './components/stories/interior/InteriorPernambuco'
import Recife from './components/stories/recife/Recife';
import About from './components/about/About';

// for each pra criar as rotas
// HEROKU
function App() {
    return (
        <Router>
            <div className='menuContainer'>
                <div className="firstRow">
                </div>
                <div className='columnMenu'>
                    <header>
                        <div className="appLeftMenu">
                            <Menu/>
                        </div>
                    </header>
                </div>
                <Switch>
                    <Route exact path='/' component={MainImage}/>
                    <Route path='/riosaofrancisco' component={RioSaoFrancisco}/>
                    <Route path='/catimbau' component={Catimbau}/>
                    <Route path='/interiordepernambuco' component={InteriorPernambuco}/>
                    <Route path='/recife' component={Recife}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <div className="thirdColumn">
                </div>
                <div className="secondRow">
                </div>
            </div>
            <footer>feito com<span role="img" aria-label="amor"> &#x2661;</span></footer>
        </Router>

    );
}

export default App;
