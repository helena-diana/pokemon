import React from 'react';
import { shallow } from 'enzyme';
import { Detail } from './Detail';

describe('Detail', () => {
  const mockHistoryPush = jest.fn();
  const props = { owned: [{ id: 1, name: 'pikachu', nickname: 'sikuning' }], match: { params: { id: 2 } }, history: { push: mockHistoryPush } }
  const detail = shallow(<Detail {...props} />);
  
  it('render please wait', () => {
    expect(detail.state().pokemon).toEqual({});
    expect(detail.find('p').text()).toEqual('please wait..');
  });

  it('render title pokemon', () => {
    detail.setState({ ...detail.state(), pokemon: { name: 'barauw', id: 3, sprites: { front_detault: 'http://image' } } });
    expect(detail.find('h1').text()).toEqual('barauw');
  });


}); 