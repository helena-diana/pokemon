import React from 'react';
import PokemonCard from '../components/PokemonCard';
import { connect } from 'react-redux';

export const Owned = (props) => {
  const goToPokemon = () => {
    props.history.push('/');
  }
  return (
    <>
      <h1>Owned</h1>
      {!props.owned.length && <p>You don't have pokemons <b className="link" test-id="find-pokemons" onClick={goToPokemon}>Let's find pokemon</b></p>}
      {props.owned && props.owned.map((e) => (
        <PokemonCard 
          history={props.history}
          key={JSON.stringify(e)} 
          id={e.id}
          name={e.name}
        />
      ))}
    </>
  );
};

export default connect(({ owned }) => ({ owned }), null)(Owned);