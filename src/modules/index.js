import { combineReducers } from 'redux';
import pokemons from './pokemons';
import owned from './owned';

export default combineReducers({ pokemons, owned });