import React, { Component } from 'react'
import Story from '../../story/Story';

const firstParagraph = 'cores'
const secondParagraph = 'coloridas em P&B'

export default class Maternidade extends Component {
  render() {
    return (
        <Story firstParagraph = {firstParagraph} secondParagraph = {secondParagraph}/>
    )
  }
}
