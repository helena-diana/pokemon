import React from 'react';
import { shallow } from 'enzyme';
import PokemonCard from './PokemonCard';

describe('Pokemon', () => {
  const props = { name: 'Pikachu' }
  const pokemonCard = shallow(<PokemonCard {...props} />);

  it('name should be print', () => {
    expect(pokemonCard.find('p').text()).toEqual(props.name);
  });

});