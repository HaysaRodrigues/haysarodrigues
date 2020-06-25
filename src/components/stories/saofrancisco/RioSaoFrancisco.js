import React, {Component} from 'react'
import Story from '../../story/Story';
import data from '../../../JSON/storyPhotos.json';

// hooks
export default class RioSaoFrancisco extends Component {

    // fazer um foreach em um component storia

    constructor() {
        super();
        this.state = {
            title: '',
            firstParagraph: '',
            secondParagraph: '',
            imagesFromStory: ''
        }
    }

    componentDidMount() {
        this.filterStoryByTitle('rio são francisco')
    }

    filterStoryByTitle(storyTitle) {
        let story = data.story.filter(word => word.title === storyTitle)[0];
        this.setState({
            title: story.title,
            firstParagraph: story.firstParagraph,
            secondParagraph: story.secondParagraph,
            imagesFromStory: story.imagesFromStory
        })
    }

    render() {
        return (
            <Story
                title={this.state.title}
                firstParagraph={this.state.firstParagraph}
                secondParagraph={this.state.secondParagraph}
                photos={this.state.imagesFromStory}
            />
        )
    }
}
