import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFlickr } from "@fortawesome/free-brands-svg-icons"


const IconLink = props =>
  <a className="icon-item" href={props.link} target="blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={props.icon} color='#000000'/>
  </a>;
  
export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>rio são francisco</li>
            <li>catimbau</li>
            <li>circo da trindade</li>
            <li>interior de pernambuco</li>
            <li>recife</li>
            <li>sobre mim</li>
            <li>
              <a className="contact" href="mailto:rodrigues.haysa@gmail.com" target="blank" rel="noopener noreferrer">
                me manda um e-mail
              </a>
            </li>
            <li>
              <div className="icon-items">
                  <IconLink link="https://www.instagram.com/r.haysa/" icon={faInstagram}/>
                  <IconLink link="https://www.flickr.com/people/haysarodrigues/" icon={faFlickr}/>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
