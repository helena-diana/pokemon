import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemons } from '../modules/pokemons/actions';
import { connect } from 'react-redux';

export class Pokemon extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }
  render() {
    return (  
      <>
        <h1>Pokemon</h1>
        <p className="count">You have {this.props.owned.length} pokemon</p>
        {!this.props.pokemons && <p>No pokemons yet</p>}
        {this.props.pokemons && this.props.pokemons.map((e) => (
          <PokemonCard 
            history={this.props.history}
            key={JSON.stringify(e)} 
            id={parseInt(e.url.replace('https://pokeapi.co/api/v2/pokemon/', ''), 10)}
            name={e.name} />
        ))}
      </>
    );
  } 
}

const mapToProps = ({ pokemons, owned }) => ({ pokemons: pokemons.payload, owned });

export default connect(mapToProps,{ fetchPokemons })(Pokemon);