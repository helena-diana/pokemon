import { addPokemon, releasePokemon } from './actions';
import { ADD_POKEMON, RELEASE_POKEMON } from '../constants';

describe('action owned', () => {
  it('create action addPokemon function', () => {
    const pokemon = 1;
    const expectedAction = { type: ADD_POKEMON, pokemon };
    expect(addPokemon(pokemon)).toEqual(expectedAction);
  });

  it('create action releasePokemon function', () => {
    const pokemon = 1;
    const expectedAction = { type: RELEASE_POKEMON, pokemon };
    expect(releasePokemon(pokemon)).toEqual(expectedAction);
  });
});