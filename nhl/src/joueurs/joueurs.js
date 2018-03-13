import React, { Component } from 'react';
import './joueurs.scss';

class TableJoueurs extends Component {
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
          <table className="table-joueurs">
            <tbody>
                <tr className="first-row"><th className="photo-joueur"></th><th className="numero-joueur">Nº</th><th className="nom-joueur">Nom</th><th className="position-joueur">POS</th><th className="taille-joueur">Taille</th><th className="poids-joueur">Poids</th><th className="date-joueur">Date de naissance</th></tr>
                {items.map((item, index) => (
                <tr className={(index % 2 === 0) ? '' : 'couleur-row'} key={item.id}>
                    <td className="img-joueurs"><img alt="joueur" height="50" src={item.image[1].url}/></td><td className="numero-joueur">{item.uniform_number}</td><td>{item.first_name} {item.last_name}</td><td>{item.position}</td><td className="taille-joueur">{item.height}</td><td>{item.weight}</td><td className="joueur-date-de-naissance">{item.birth_date}</td>
                </tr>
                ))}
            </tbody>
          </table>
        );
      }
    }
  }
  export default TableJoueurs;