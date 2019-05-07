import React, { Component } from 'react'

export default class Story extends Component {
  render() {
    return (
      <div>
        <h3 className='firstParagraph'> {this.props.firstParagraph} </h3>
        <h3 className='secondParagraph'> {this.props.secondParagraph} </h3>
      </div>
    )
  }
}
