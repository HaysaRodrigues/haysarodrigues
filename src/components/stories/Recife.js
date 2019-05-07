import React, { Component } from 'react'
import Story from '../story/Story';

const firstParagraph = 'tente fazer uma foto'
const secondParagraph = 'para cada música de jonnhy hooker'

export default class Recife extends Component {
  render() {
    return (
      <div>
        <Story firstParagraph = {firstParagraph} secondParagraph = {secondParagraph}/>
      </div>
    )
  }
}
