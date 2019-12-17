import React from 'react';
import { mount } from 'enzyme';
import Router, { NotFoundPage } from './index';
import { MemoryRouter } from 'react-router-dom';
import Pokemon from './Pokemon';

describe('Router', () => {
  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/unknown' ]}>
        <Router/>
      </MemoryRouter>
    );
    expect(wrapper.find(Pokemon)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
});