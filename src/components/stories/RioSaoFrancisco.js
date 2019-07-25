import React, { Component } from 'react'
import Story from '../story/Story';

const firstParagraph = 'adeus velho chico'
const secondParagraph = 'diz o povo nas margens'

export default class RioSaoFrancisco extends Component {
  render() {
    return (
      <div>
        <Story 
          firstParagraph={firstParagraph} 
          secondParagraph={secondParagraph}/>
      </div>
    )
  }
}
