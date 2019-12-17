import * as constants from '../constants';

export const addPokemon = pokemon => {
  return {
    type: constants.ADD_POKEMON,
    pokemon
  };
};

export const releasePokemon = pokemon => {
  return {
    type: constants.RELEASE_POKEMON,
    pokemon
  };
};