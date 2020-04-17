import React from 'react';
import Gallery from 'react-photo-gallery';
import photos from './photos';

function StoryPhotoGallery() {
    return (
        <Gallery photos={photos} direction={"column"}/>
    );
}

export default StoryPhotoGallery;