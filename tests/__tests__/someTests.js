// test file
import React from 'react';
import ReactModal from 'react-modal';
import { shallow, mount, render } from 'enzyme';
import PhotoGrid from '../../client/components/photoGrid';
import PMApp from '../../client/components/app';
import SlideShow from '../../client/components/slideshow';
import Modal from '../../client/components/newModal';
import fetch from 'isomorphic-fetch';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#app');

const photoArray = ["https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/6.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/7.jpg",  "https://s3-us-west-1.amazonaws.com/wanderlodge/8.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/9.jpg",  "https://s3-us-west-1.amazonaws.com/wanderlodge/10.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/11.jpg"];

const shortPhotoArray = [{
  "id": 1,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg",
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
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg",
  "description": "Nestled zen in coastal Los Angeles"
},
{
  "id": 4,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg",
  "description": "Nestled zen in coastal Los Angeles"
},
{
  "id": 5,
  "propertyID": 1,
  "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg",
  "description": "Lovely retreat in heart of Silicon Valley"
}];

const photosFive = ["https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg", "https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg"];

const fakeState = {
  modalIsOpen: false,
  currentIndex: 0,
  photos: [{
    "id": 1,
    "propertyID": 1,
    "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
    "description": "Nestled zen in coastal Silicon Valley"
  },
  {
    "id": 2,
    "propertyID": 1,
    "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
    "description": "Nestled zen in coastal Los Angeles"
  },
  {
    "id": 3,
    "propertyID": 1,
    "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
    "description": "Lovely retreat in heart of Silicon Valley"
  },
  {
    "id": 4,
    "propertyID": 1,
    "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
    "description": "Desirable sanctuary in downtown Los Angeles"
  },
  {
    "id": 445,
    "propertyID": 1,
    "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
    "description": "Sunny retreat in heart of Community"
  }],
};

const openModal = () => {
  return 1; 
}

describe('render photos', () => {
  test('should render first 5 photos', () => {
    const wrapper = mount(<PhotoGrid photos={photosFive} />);
    expect(wrapper.find('img').length).toBe(5);
  });

  test('should include a stock image if no photo is provided to state', () => {
    const wrapper = shallow(<PMApp />, { disableLifecycleMethods: true });
    expect(wrapper.state().photos[1].url).toEqual("https://wallpapercave.com/wp/HsM0IHh.jpg");
  });

  test('state should be passed in', () => {
    const wrapper = shallow(<PhotoGrid photos={shortPhotoArray} />);
    const url = 'https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg'; 
    expect(wrapper.find("#main").prop("src")).toEqual("https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg");
  });

  test('state should be passed in', () => {
    const wrapper = shallow(<PhotoGrid photos={shortPhotoArray} />);
    const url = 'https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg'; 
    expect(wrapper.find("#img2").prop("src")).toEqual("https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg");
  });

  test('state should be passed in', () => {
    const wrapper = shallow(<PhotoGrid photos={shortPhotoArray} />);
    const url = 'https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg'; 
    expect(wrapper.find("#img3").prop("src")).toEqual("https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg");
  });

  test('state should be passed in', () => {
    const wrapper = shallow(<PhotoGrid photos={shortPhotoArray} />);
    const url = 'https://s3-us-west-1.amazonaws.com/wanderlodge/1.jpg'; 
    expect(wrapper.find("#img4").prop("src")).toEqual("https://s3-us-west-1.amazonaws.com/wanderlodge/5.jpg");
  });

});

describe('clicks', () => {
  test('should change state', () => {
    const wrapper = shallow(<PMApp photos={photosFive} />, { disableLifecycleMethods: true });  
    expect(wrapper.state('currentIndex')).toBe(0);
    wrapper.instance().nextClick();
    expect(wrapper.state('currentIndex')).toBe(1);
  });

  test('modal should pop up when state for modal is true', () => {
    const wrapper = shallow(<PMApp />, { disableLifecycleMethods: true });
    wrapper.instance().openModal();
    expect(wrapper.state('modalIsOpen')).toBe(true);
  });

  test('should carousel backwards', () => {
    const wrapper = shallow(<PMApp />, {disableLifecycleMethods: true});
    wrapper.instance().prevClick();
    expect(wrapper.state('currentIndex')).toBe(4);
  });

  test('should invoke onclick function in img when clicked', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(false);
    wrapper.find('#main').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(true);
  });

  test('should invoke onclick function in img when clicked', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(false);
    wrapper.find('#img1').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(true);
  });

  test('should invoke onclick function in img when clicked', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(false);
    wrapper.find('#img2').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(true);
  });

  test('should invoke onclick function in img when clicked', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(false);
    wrapper.find('#img3').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(true);
  });

  test('should invoke onclick function in img when clicked', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(false);
    wrapper.find('#img4').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(true);
  });

  test('should invoke close function for close button', () => {
    const wrapper = mount(<PMApp />);
    expect(wrapper.state().modalIsOpen).toBe(true);
    wrapper.find('#closeButton').simulate('click');
    expect(wrapper.state().modalIsOpen).toBe(false);
  });

});

describe('slideshow component', () => {
  test('should include image in slideshow', () => {
    const wrapper = shallow(<SlideShow state={fakeState} />);
    expect(wrapper.find('img').length).toBe(1);
  });

  test('slideshow component should have two children', () => {
    const wrapper = shallow(<SlideShow state={fakeState} />);
    expect(wrapper.children().length).toBe(2);
  });
});

describe('state', () => {
  test('state should have 5 stocks photos', () => {
    const wrapper = shallow(<PMApp />, {disableLifecycleMethods: true});
    expect(wrapper.state('photos').length).toBe(5);
  });

});

describe('modal component', () => {
  test('state should have 5 stocks photos', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.Modal').hasClass('.Modal')).toBe(true);
  });

});
