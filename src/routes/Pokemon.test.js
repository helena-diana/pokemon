import React from 'react';
import { mount } from 'enzyme';
import Pokemon from './Pokemon';
import PokemonCards from '../components/PokemonCard';

describe('Pokemon', () => {
  const props = { pokemons: [{ name: 'pikachu' }] }
  const pokemon = mount(<Pokemon {...props} />);

  it('it recieve pokemons props', () => {
    expect(pokemon.find(PokemonCards)).toHaveLength(1);
  });
});