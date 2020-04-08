import React from 'react'
import ReactDom from 'react-dom'
import {shallow} from 'enzyme'
import { expect } from 'chai';
import About from './About'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('tests about render component correctly', function () {
    it('should renders without crashing', function () {
        const div = document.createElement('div');
        ReactDom.render(<About/>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('should have title when rendering the component', function () {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('.aboutTitle')).to.have.length(1)
    });
    it('should have an image of the person', function () {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('.aboutMeImage')).to.have.length(1)
    });
    it('should have a paragraph with about description', function () {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('.aboutDescription')).to.have.length(1)
    });
});

