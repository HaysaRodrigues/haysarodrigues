import React, { Component } from 'react'
import Story from '../story/Story';

const title = 'primeiro titulo'
const firstParagraph = 'By default text align has the start value, meaning the text starts at the “start”, origin 0, 0 of the box that contains it. This means top left in left-to-right languages, and top right in right-to-left languages.'
const secondParagraph = 'By default text align has the start value, meaning the text starts at the “start”, origin 0, 0 of the box that contains it. This means top left in left-to-right languages, and top right in right-to-left languages.'

export default class Catimbau extends Component {
  render() {
    return (
      <div>
        <Story 
        title={title}
        firstParagraph={firstParagraph} 
        secondParagraph={secondParagraph}/>
      </div>
    )
  }
}
