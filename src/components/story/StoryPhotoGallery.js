import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';

class StoryPhotoGallery extends Component {
    render() {
        return (
            <Gallery photos={this.props.photos} direction={"column"}/>
        )
    }
}

export default StoryPhotoGallery;