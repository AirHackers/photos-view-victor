import React from 'react';

const SlideShow = (props) => {
  return (
    <div id="pm-slideshow-container">
      <div id="pm-ss-img-container">
        <img id="pm-ss-img" src={props.state.photos[props.state.currentIndex].url} />
      </div>
      <p id="pm-ss-ptag">{props.state.currentIndex + 1}/{props.state.photos.length}: {props.state.photos[props.state.currentIndex].description}</p>
    </div>
  )
}

export default SlideShow;