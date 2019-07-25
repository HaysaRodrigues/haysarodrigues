import React, { Component } from 'react'
import Story from '../story/Story';
import data from '../../JSON/storyPhotos.json';

export default class Catimbau extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      firstParagraph: '',
      secondParagraph: ''
    }
  }

  componentDidMount() {
    this.filterStoryByTitle('catimbau')
  }
  
  filterStoryByTitle(storyTitle) {
    var story = data.story.filter(word => word.title === storyTitle)[0];
    this.setState({title: story.title, firstParagraph: story.firstParagraph, secondParagraph: story.secondParagraph})
  }

  render() {
  
    return (
      <div>
        <Story 
        title={this.state.title}
        firstParagraph={this.state.firstParagraph} 
        secondParagraph={this.state.secondParagraph}/>
      </div>
    )
  }
}
