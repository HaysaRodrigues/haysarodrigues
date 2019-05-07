import React, { Component } from 'react'
import Story from '../story/Story';

const firstParagraph = 'catimbau certamente é...'
const secondParagraph = 'um lugar que caiu um meteoro gingantesco.'

export default class Catimbau extends Component {
  render() {
    return (
      <div>
        <Story firstParagraph={firstParagraph} secondParagraph={secondParagraph}/>
      </div>
    )
  }
}
