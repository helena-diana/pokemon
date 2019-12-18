import React from 'react';
import { shallow } from 'enzyme';
import PokemonCard from './PokemonCard';

describe('Pokemon', () => {
  const mockHistoryPush = jest.fn();
  const mockReleasePokemon = jest.fn();
  const props = { releasePokemon: mockReleasePokemon, name: 'Pikachu', id: 1,  history: { push: mockHistoryPush } };
  const pokemonCard = shallow(<PokemonCard {...props} />);

  it('name should be print', () => {
    expect(pokemonCard.find('p').text()).toEqual(props.name);
  });

  describe('when user click go to detail', () => {
    beforeEach(() => {
      pokemonCard.find('.card').simulate('click');
    })
    it('history push function should be called', () => {
      expect(mockHistoryPush).toHaveBeenCalled();
      expect(mockHistoryPush).toHaveBeenCalledWith(`/pokemon/${props.id}`);
    });
  });

});