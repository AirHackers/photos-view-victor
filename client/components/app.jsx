  import React from 'react';
  import ReactDOM from 'react-dom';
  import PhotoGrid from './photoGrid';
  import NewModal from './newModal';

  class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        // currentPhoto: this.state.photos[0].url,
        modalIsOpen: false,
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

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);

      this.nextClick = this.nextClick.bind(this);
      this.previousClick = this.previousClick.bind(this);
      this.handleClick = this.handleClick.bind(this);

    }

    nextClick() {
      this.setState({currentPhoto: "current photo"})
    };
    
    previousClick() {
      this.setState({currentPhoto: "current photo"})
    };

    handleClick() {
      this.setState({currentPhoto: "current photo"})
    };

    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
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
          <div id="app-root">
            <PhotoGrid photos={this.state.photos} />
          </div>
          <NewModal state={this.state} openModal={this.openModal} closeModal={this.closeModal} />
        </div>
      );
    }
  }

  export default App;
