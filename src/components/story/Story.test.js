import React from 'react';
import ReactDOM from 'react-dom';
import Story from './Story';

describe('tests about render component correctly', function () {
    it('should renders Story without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Story/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

