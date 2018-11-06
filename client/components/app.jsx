import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './photoGrid';
import NewModal from './newModal';

class PMApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  nextClick() {
    if (this.state.currentIndex === this.state.photos.length - 1) {
      return this.setState({
        currentIndex: 0,
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  
  prevClick() {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.photos.length - 1,
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  fetchPhoto(id) {
    return fetch(`http://localhost:3002/photos/${id}`)
      .then (function(response) {
        return response.json();
      })
      .catch(err => {if (err) console.log(err)});
  }

  componentDidMount() {
    this.fetchPhoto(1)
      .then((val) => {
        this.setState({ photos: val });
      });
  }

  render() {
    return (
      <div>
        <NewModal 
        state={this.state} 
        closeModal={this.closeModal} 
        nextClick={this.nextClick} 
        prevClick={this.prevClick}
        />
        <PhotoGrid 
        photos={this.state.photos} 
        openModal={this.openModal}
        />
      </div>
    );
  }
}

export default PMApp;
