import { SET_POKEMONS, FETCH_POKEMONS } from '../constants';

const pokemonReducer = (state = {}, actions) => {
  switch (actions.type) {
    case SET_POKEMONS:
      return {
        ...state,
        loading: false,
        payload: actions.pokemons,
      };
    case FETCH_POKEMONS:
      return {
        ...state,
        payload: [],
        loading: true,
      }
    default:
      return state;
  }
};

export default pokemonReducer;