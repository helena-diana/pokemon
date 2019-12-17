import React from 'react';
import { mount, shallow } from 'enzyme';
import { Owned } from './Owned';
import PokemonCard from '../components/PokemonCard';

describe('Owned', () => {
  const mockHistoryPush = jest.fn();
  let owned;
  let defaultProps = { history: { push: mockHistoryPush } }
  it('it recieve Owned props', () => {
    const props = { ...defaultProps, owned: [{ name: 'pikachu' }] }
    owned = mount(<Owned {...props} />);
    expect(owned.find(PokemonCard)).toHaveLength(1);
  });

  it('render empty owned pokemon', () => {
    const props = { ...defaultProps, owned: [] }
    owned = mount(<Owned {...props} />);
    expect(owned.find(PokemonCard)).toHaveLength(0);
  });

  describe('when user click let find pokemons', () => {
    const props = { ...defaultProps, owned: [] };
    owned = shallow(<Owned {...props} />);
    beforeEach(() => {
      owned.find('[test-id="find-pokemons"]').simulate('click');
    })
    it('history push function should be called', () => {
      expect(mockHistoryPush).toHaveBeenCalled();
    });
  });
});