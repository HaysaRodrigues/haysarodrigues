import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFlickr } from "@fortawesome/free-brands-svg-icons"

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
              <a className="contact" href="mailto:rodrigues.haysa@gmail.com" target="blank">
                me manda um e-mail
              </a>
            </li>
            <li>
              <div className="icon-items" >
                  <FontAwesomeIcon className="icon-item" icon={faInstagram} color='#000000'/>
                  <FontAwesomeIcon className="icon-item" icon={faFlickr} color='#000000'/>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
