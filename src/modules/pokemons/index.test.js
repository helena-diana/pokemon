import * as actions from '../constants';
import pokemonsReducer from './index';

describe('pokemons reducer', () => {
  const pokemons = { payload: [{ name: 'pikachu' }], loading: false };

  it('set pokemon list', () => {
    expect(pokemonsReducer(undefined, { type: actions.SET_POKEMONS, pokemons })).toEqual(pokemons);
  });

  it('unknown action type', () => {
    expect(pokemonsReducer(undefined, { type: null, pokemons })).toEqual({});
  });

  it('fetching pokemons', () => {
    expect(pokemonsReducer(undefined, { type: actions.FETCH_POKEMONS })).toEqual({ payload: [], loading: true });
  });
});