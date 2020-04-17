import React, { Component } from 'react'
import Story from '../../story/Story';

const firstParagraph = 'melhor lugar do brasil'
const secondParagraph = 'é PE'

export default class InteriorPernambuco extends Component {
  render() {
    return (
      <div>
        <Story firstParagraph = {firstParagraph} secondParagraph = {secondParagraph}/>
      </div>
    )
  }
}
