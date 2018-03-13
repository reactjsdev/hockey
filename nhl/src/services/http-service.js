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
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table>
            <tbody>
                {items.map(item => (
                <tr key={item.id}>
                    <td>{item.first_name}</td><td>{item.position}</td><td>{item.birth_date}</td><td>{item.height}</td><td>{item.weight}</td><td>{item.birth_date}</td>
                </tr>
                ))}
            </tbody>
          </table>
        );
      }
    }
  }
  export default Api;