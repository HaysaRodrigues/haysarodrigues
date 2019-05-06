import React from 'react';
import './App.css';
import Menu from './components/Menu';
import MainImage from './components/MainImage';

function App() {
  return (
    <>
      <div className="main-div">
        <div className='row'> 
          <div className='column-menu'>
            <header>
              <a className="name" href="http://localhost:3000">haysa rodrigues</a>
              <div>
                <div className="app-left-menu">
                  <Menu />
                </div>
              </div>
            </header>
          </div>
          <div className='column-photo'>
            <MainImage />
          </div>
        </div>  
      </div>
      <footer>feito com<span role="img" aria-label="amor"> &#x2661;</span></footer>
    </>
  );
}

export default App;
