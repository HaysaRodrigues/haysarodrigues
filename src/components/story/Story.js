import React, { Component } from 'react'
class Story extends Component {
  
  render() {
    return (
      <div className='story'>
        <h1 className='storyTitle'> {this.props.title} </h1>
        <div className='paragraphs'>
          <h3 className='paragraphsFont'> {this.props.firstParagraph} </h3>
          <h3 className='paragraphsFont'> {this.props.secondParagraph} </h3>
        </div>
        <div className='photoGrid'>
          
        </div>
      </div>
    )
  }
}

export default Story
