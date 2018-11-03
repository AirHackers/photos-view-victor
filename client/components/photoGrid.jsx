import React from 'react';

const PhotoGrid = (props) => {

  return(
    <div className="grid-container">
      <div className="main">
        <img id="main" alt="Main Image" onClick={()=>(props.openModal())} src={props.photos[0].url}/>
      </div>
      <div className="img1">
        <img id="img1" alt="Photo1" onClick={()=>(props.openModal())} src={props.photos[1].url}/>
      </div>
      <div className="img2">
        <img id="img2" alt="Photo2" onClick={()=>(props.openModal())} src={props.photos[2].url}/>
      </div>
      <div className="img3">
        <img id="img3" alt="Photo3" onClick={()=>(props.openModal())} src={props.photos[3].url}/>
      </div>
      <div className="img4">
        <button id="view-photos-btn" onClick={()=>(props.openModal())}>View Photos</button>
        <img id="img4" alt="Photo4" onClick={()=>(props.openModal())} src={props.photos[4].url}/>
      </div>
    </div>
  );
};

export default PhotoGrid;
