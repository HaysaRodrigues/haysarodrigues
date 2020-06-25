import React, {Component} from 'react'
import StoryPhotoGallery from './StoryPhotoGallery'
import './Story.css'

class Story extends Component {

    render() {
        return (
            <div className='containerStory'>
                <h1 className='storyTitle'> {this.props.title} </h1>
                <div className='paragraphs'>
                    <h3 className='paragraphsFont'> {this.props.firstParagraph} </h3>
                    <h3 className='paragraphsFont'> {this.props.secondParagraph} </h3>
                </div>
                <div className='photoGrid'>
                    <StoryPhotoGallery photos={this.props.photos}/>
                </div>
            </div>
        )
    }
}

export default Story
