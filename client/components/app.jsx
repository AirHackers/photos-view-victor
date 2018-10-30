import React from 'react';
// import Promise from 'bluebird';
// import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  fetchPhoto() {
    return fetch('/photos/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return JSON.stringify(myJson);
      })
      .catch(err => {if (err) console.log(err)});
  }

  // componentDidMount() {
  //   this.fetchPhoto()
  // }

  componentDidMount() {
    this.fetchPhoto()
      .then((val) => {
        this.setState({ photos: val });
        console.log(val);
      });
  }

  render() {
    return (
      <div>
        {this.state.photos}
      </div>
    );
  }
}

export default App;
