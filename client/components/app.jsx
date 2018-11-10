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
        "id": 5,
        "propertyID": 1,
        "url": "https://wallpapercave.com/wp/HsM0IHh.jpg",
        "description": "Sunny retreat in heart of Community"
      }],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.setStateOne = this.setStateOne.bind(this);
    this.setStateTwo = this.setStateTwo.bind(this);
    this.setStateThree = this.setStateThree.bind(this);
    this.setStateFour = this.setStateFour.bind(this);
    this.setStateFive = this.setStateFive.bind(this);
  }

  // set state to 
  setStateOne(event) {
    this.setState({
      currentIndex: 0,
      modalIsOpen: true,
    });
  }

  setStateTwo(event) {
    this.setState({
      currentIndex: 1,
      modalIsOpen: true,
    });
  }

  setStateThree(event) {
    this.setState({
      currentIndex: 2,
      modalIsOpen: true,
    });
  }

  setStateFour(event) {
    this.setState({
      currentIndex: 3,
      modalIsOpen: true,
    });
  }

  setStateFive(event) {
    this.setState({
      currentIndex: 4,
      modalIsOpen: true,
    });
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

  openModal(event) {
    this.setState({
      modalIsOpen: true,
      // currentIndex: this.id,
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  fetchPhoto(id) {
    return fetch(`http://3.16.153.113/photos/${id}`)
      .then ((response) => {
        return response.json();
      })
      .then ((finalPhotos) => {      
        this.setState({ photos: finalPhotos});
      })
      // .then (function(myJson) {
      //   return JSON.stringify(myJson);
      // })
      .catch(err => {if (err) console.log(err)});
  }

  componentDidMount() {
    const propertyId =  window.location.pathname.replace(/[^0-9\.]+/g,"");

     // substring(7, 9)
    this.fetchPhoto(propertyId)
      // .then((val) => {
      //   this.setState({ photos: JSON.parse(val) });
      //   console.log(val);
      // });
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
        setStateOne={this.setStateOne}
        setStateTwo={this.setStateTwo}
        setStateThree={this.setStateThree}
        setStateFour={this.setStateFour}
        setStateFive={this.setStateFive}
        />
      </div>
    );
  }
}

export default PMApp;
