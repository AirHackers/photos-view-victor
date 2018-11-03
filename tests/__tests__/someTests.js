// test file
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoGrid from '../../client/components/photoGrid';
import App from '../../client/components/app';
import SlideShow from '../../client/components/slideshow';
import Modal from '../../client/components/newModal';

const photoArray = ["https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/6.jpg"];

describe('my beverage', () => {
  test('is delicious', () => {
    const wrapper = mount(<PhotoGrid photos={photoArray} />);
    expect(wrapper.find('img').length).toBe(5);
  });

  test('is not sour', () => {

    
  });
});