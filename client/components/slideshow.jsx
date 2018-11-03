import React from 'react';

const SlideShow = (props) => {
  return (
    <div id="slideshow-container">
      <div id="ss-img-container">
        <img id="ss-img" src={props.state.photos[props.state.currentIndex].url} />
      </div>
      <p id="ss-ptag">{props.state.currentIndex + 1}/{props.state.photos.length}: {props.state.photos[props.state.currentIndex].description}</p>
    </div>
  )
}

export default SlideShow;