import React, { Component } from 'react'
import Story from '../story/Story';

const firstParagraph = 'cores'
const secondParagraph = 'coloridas em P&B'

export default class Trindade extends Component {
  render() {
    return (
      <div>
        <Story firstParagraph = {firstParagraph} secondParagraph = {secondParagraph}/>
      </div>
    )
  }
}
