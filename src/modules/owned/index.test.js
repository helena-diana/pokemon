import * as actions from '../constants';
import ownedReducer from './index';

describe('owned reducer', () => {
  const owned = [{ name: 'pikachu', id: 1 }];

  it('add pokemon to owned reducer', () => {
    expect(ownedReducer(undefined, { type: actions.ADD_POKEMON, pokemon: owned[0] })).toEqual(owned);
  });

  it('not trigger anything reducer', () => {
    const initialState = owned;
    expect(ownedReducer(initialState, { type: null, pokemon: owned[0] })).toEqual(initialState);
  });

  it('release pokemon', () => {
    const initialState = owned;
    expect(ownedReducer(initialState, { type: actions.RELEASE_POKEMON, pokemon: owned[0].id })).toEqual([]);
  });

});