import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

describe('Description', () => {
  let props;
  let description;
  it('render empty moves length', () => {
    props = { pokemon: { moves: [], types: [] } };
    description = shallow(<Description {...props} />);
    expect(description.find('label')).toHaveLength(0);
  });
  it('render empty pokemon', () => {
    props = { pokemon: { moves: [{ move: { name: 'glide' } }], types: [{ type: { name: 'fire' }  }] } };
    description = shallow(<Description {...props} />);
    expect(description.find('label')).toHaveLength(2);
  });
  

  
});