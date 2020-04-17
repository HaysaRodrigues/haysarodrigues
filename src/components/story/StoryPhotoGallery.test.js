import React from 'react';
import ReactDOM from 'react-dom';
import StoryPhotoGallery from './StoryPhotoGallery';

describe('tests about render component correctly', function () {
    it('should renders photo gallery without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StoryPhotoGallery />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

