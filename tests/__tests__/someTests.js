// test file
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoGrid from '../../client/components/photoGrid';
import App from '../../client/components/app';
import SlideShow from '../../client/components/slideshow';
import Modal from '../../client/components/newModal';

const photoArray = ["https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/6.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/7.jpg",  "https://s3-us-west-1.amazonaws.com/wanderlodge/8.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/9.jpg",  "https://s3-us-west-1.amazonaws.com/wanderlodge/10.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/11.jpg"];

const shortPhotoArray = [{
  "id": 1,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg",
  "description": "Nestled zen in coastal Silicon Valley"
},
{
  "id": 2,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg",
  "description": "Nestled zen in coastal Los Angeles"
},
{
  "id": 3,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg",
  "description": "Nestled zen in coastal Los Angeles"
},
{
  "id": 4,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg",
  "description": "Nestled zen in coastal Los Angeles"
},
{
  "id": 5,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg",
  "description": "Lovely retreat in heart of Silicon Valley"
}];

const photosFive = ["https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg"];

describe('render photos', () => {
  test('should render first 5 photos', () => {
    const wrapper = mount(<PhotoGrid photos={photosFive} />);
    expect(wrapper.find('img').length).toBe(5);
  });

  test('should include a stock image if no photo is provided to state', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.state().photos[1].url).toEqual("https://wallpapercave.com/wp/HsM0IHh.jpg");
  });

  test('state should be passed in', () => {
    const wrapper = shallow(<PhotoGrid photos={shortPhotoArray} />);
    expect(wrapper.find('img').at(1).toContain("https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg"));
  });

});

describe('clicks', () => {
  test('should change state', () => {
    const wrapper = shallow(<App photos={photosFive} />, { disableLifecycleMethods: true });
    expect(wrapper.state('currentIndex')).toBe(0);
    wrapper.instance().nextClick();
    expect(wrapper.state('currentIndex')).toBe(1);
  });

});

// mount / shallow - just the component no children