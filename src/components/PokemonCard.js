import React, { Component } from 'react';

// class PokemonCard extends Component {
//   render() {
//     return <p>{this.props.name}</p>;
//   }
// }

const PokemonCard = ({ name }) => (
  <>
    <p>{name}</p>
  </>
)

export default PokemonCard;