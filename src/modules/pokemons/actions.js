import { SET_POKEMONS, FETCH_POKEMONS } from '../constants';

export const fetchPokemons = () => dispatch => {
  dispatch({ type: FETCH_POKEMONS, pokemons: [], loading: true });
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(json => {
      dispatch({ type: SET_POKEMONS, pokemons: json.results });
    });
};
