import React from 'react';
import { mount } from 'enzyme';
import { Pokemon } from './Pokemon';
import PokemonCard from '../components/PokemonCard';

describe('Pokemon', () => {
  const mockFetchPokemons = jest.fn();
  const defaultProps = { fetchPokemons: mockFetchPokemons, owned: [{ name: 'pikachu' }] };
  let pokemon;
  
  it('it recieve pokemons props', () => {
    const props = { ...defaultProps, pokemons: [{ name: 'pikachu', url: 'https://yo.com/v2/pokemons' }] }
    pokemon = mount(<Pokemon {...props} />);
    expect(pokemon.find(PokemonCard)).toHaveLength(1);
  });
  it('render empty pokemon', () => {
    const props = { ...defaultProps, pokemons: [] }
    pokemon = mount(<Pokemon {...props} />);
    expect(pokemon.find(PokemonCard)).toHaveLength(0);
  });
  it('render count owned pokemon', () => {
    const props = { ...defaultProps, pokemons: [] }
    pokemon = mount(<Pokemon {...props} />);
    expect(pokemon.find('.count').text()).toEqual('You have 1 pokemon');
  });

  describe('Mount', () => {
    beforeEach(() => {
      const props = {...defaultProps};
      pokemon = mount(<Pokemon {...props} />);
    });
    it('dispatch `fetchPokemons()` methods didmount', () => {
      expect(mockFetchPokemons).toHaveBeenCalledTimes(4);
    });
  });
  
});