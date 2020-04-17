import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFlickr} from "@fortawesome/free-brands-svg-icons"


const IconLink = props =>
    <a className="iconItem" href={props.link} target="blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={props.icon} color='#000000'/>
    </a>;

export default class Menu extends Component {
    render() {
        return (

            <div>
                <nav>
                    <div className='menuToggle'>
                        <ul className='menu'>
                            <li className="name"><Link to={'/'}> haysa rodrigues </Link></li>
                            <li><Link to={'/riosaofrancisco'}> rio são francisco </Link></li>
                            <li><Link to={'/catimbau'}> catimbau </Link></li>
                            <li><Link to={'/interiordepernambuco'}> interior de pernambuco </Link></li>
                            <li><Link to={'/recife'}> recife </Link></li>
                            <li><Link to={'/about'}> sobre </Link></li>
                            <li>
                                <a href="mailto:rodrigues.haysa@gmail.com" target="blank" rel="noopener noreferrer">
                                    me manda um e-mail
                                </a>
                            </li>
                            <li>
                                <div className="iconItems">
                                    <IconLink link="https://www.instagram.com/r.haysa/" icon={faInstagram}/>
                                    <IconLink link="https://www.flickr.com/people/haysarodrigues/" icon={faFlickr}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
