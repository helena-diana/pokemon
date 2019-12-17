import React from 'react';
import { mount } from 'enzyme';
import { Detail } from './Detail';

describe('Detail', () => {
  it('render owned', () => {
    const props = { owned: [{ id: 1 }], match: { params: { id: 2 } } }
    const detail = mount(<Detail {...props} />);
    expect(detail.find('.button-get-pokemons').exists()).toBe(true);
  });
}); 