import React from 'react';

// unable to load with out mapping, but cannot map because first 5 photos are necessary
// 
const LeftList = (props) => {
  console.log(props.photos)

  return(
    <div className="grid-container" onClick="console.log('hello');">
      <div className="main">
        <img id="main" src={props.photos[0].url}/>
      </div>
      <div className="img1">
        <img id="img1" src={props.photos[1].url}/>
      </div>
      <div className="img2">
        <img id="img2" src={props.photos[2].url}/>
      </div>
      <div className="img3">
        <img id="img3" src={props.photos[3].url}/>
      </div>
      <div className="img4">
        <img id="img4" src={props.photos[4].url}/>
        {/* <a className="button" href="" text="button"></a> */}
      </div>
    </div>
  );
};

export default LeftList;

