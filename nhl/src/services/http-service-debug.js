import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/winnipeg")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result[0].roster
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return React.createElement(
          "div",
          null,
          "Error: ",
          error.message
        );
      } else if (!isLoaded) {
        return React.createElement(
          "div",
          null,
          "Loading..."
        );
      } else {
        //mix of es5 which exposes the array object in console
        //debugger;
      }
    }
  }
  export default Api;