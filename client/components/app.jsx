import React from 'react';
import PhotoGrid from './photoGrid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [{
        "id": 1,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/2.jpg",
        "description": "Nestled zen in coastal Silicon Valley"
      },
      {
        "id": 2,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/3.jpg",
        "description": "Nestled zen in coastal Los Angeles"
      },
      {
        "id": 3,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/6.jpg",
        "description": "Lovely retreat in heart of Silicon Valley"
      },
      {
        "id": 4,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/14.jpg",
        "description": "Desirable sanctuary in downtown Los Angeles"
      },
      {
        "id": 445,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/4.jpg",
        "description": "Sunny retreat in heart of Community"
      },
      {
        "id": 446,
        "propertyID": 1,
        "url": "https://s3-us-west-1.amazonaws.com/wanderlodge/14.jpg",
        "description": "Cozy shared apartment in downtown Community"
      }],
    };
  }

  fetchPhoto() {
    return fetch('/photos/1')
      .then (function(response) {
        return response.json();
      })
      .then (function(myJson) {
        return JSON.stringify(myJson);
      })
      .catch(err => {if (err) console.log(err)});
  }

  componentDidMount() {
    this.fetchPhoto()
      .then((val) => {
        this.setState({ photos: JSON.parse(val) });
        console.log(val);
      });
  }

  render() {
    return (
      <div>
        <div>
    
        </div>
        <PhotoGrid photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
