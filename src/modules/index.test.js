import rootReducers from './index';

describe('rootReducers', () => {
  it('initialize root reducers', () => {
    expect(rootReducers({}, {})).toEqual({ pokemons: {}, owned: [] });
  });
});
