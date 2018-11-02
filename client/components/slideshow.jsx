import React from 'react';

const SlideShow = (props) => {
  return (
    <div id="slideshow-container">
      <img src={props.state.photos[props.state.currentIndex].url} />
      <p>{props.state.photos[props.state.currentIndex].description}</p>
    </div>
  )
}

export default SlideShow;