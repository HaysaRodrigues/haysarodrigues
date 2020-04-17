import React from 'react'
import aboutMeImage from '../../imgs/pp.jpeg'
import './about.css'

function About() {
    return (
        <div className='aboutContainer'>
            <h1 className='storyTitle aboutTitle'>Quem fez esse site e essas fotos?</h1>
            <div className='imageCropper'>
                <img className='aboutMeImage'
                     src={aboutMeImage}
                     alt='foto de haysa'
                />
            </div>

            <p className='paragraphsFont aboutDescription'>
                <p>Uma cabeça inquieta e ao mesmo tempo vazia. Curiosa e
                    entediada, encontrei na fotografia um escape enorme para
                    fugir dos estresses do dia a dia, e descobri que com ela,
                    eu consigo me conectar e enxeragar as coisas com outros olhares.
                </p>
                <p>
                    Olhares esses que nem sempre fazem bem mas que abrem minha cabeça
                    pra entender melhor que na vida nem tudo deve ser problematização.
                    Se não a gente endoida.
                </p>
            </p>

        </div>
    )
}

export default About;
