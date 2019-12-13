import React from 'react';
import PokemonCard from '../components/PokemonCard';

const Pokemon = (props) => {
  return (
    <>
      {props.pokemons.map((e) => (
        <PokemonCard key={JSON.stringify(e)} name={e.name} />
      ))}
    </>
  );
};

export default Pokemon;