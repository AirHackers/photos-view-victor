import React from 'react';

const PhotoGrid = (props) => {

  return(
    <div className="pm-grid-container">
      <div className="pm-main">
        <img id="pm-main" alt="Main Image" onClick={()=>(props.setStateOne())} src={props.photos[0].url}/>
      </div>
      <div className="pm-img1">
        <img id="pm-img1" alt="Photo1" onClick={()=>(props.setStateTwo())} src={props.photos[1].url}/>
      </div>
      <div className="pm-img2">
        <img id="pm-img2" alt="Photo2" onClick={()=>(props.setStateThree())} src={props.photos[2].url}/>
      </div>
      <div className="pm-img3">
        <img id="pm-img3" alt="Photo3" onClick={()=>(props.setStateFour())} src={props.photos[3].url}/>
      </div>
      <div className="pm-img4">
        <button id="pm-view-photos-btn" onClick={()=>(props.openModal())}>View Photos</button>
        <img id="pm-img4" alt="Photo4" onClick={()=>(props.setStateFive())} src={props.photos[4].url}/>
      </div>
    </div>
  );
};

export default PhotoGrid;
