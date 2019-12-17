import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchPokemons } from './actions';
import { SET_POKEMONS, FETCH_POKEMONS } from '../constants';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ pokemons: [] });
const mockResponse = { body: { results: [{ name: 'pikachu' }] } };

fetchMock.get('https://pokeapi.co/api/v2/pokemon/', mockResponse);

it('create an async action to fetch pokemons', () => {
  const expectedAction = [
    { type: FETCH_POKEMONS, pokemons: [], loading: true },
    { type: SET_POKEMONS, pokemons: mockResponse.body.results }
  ];
  return store.dispatch(fetchPokemons()).then(() => {
    expect(store.getActions()).toEqual(expectedAction);
  });

});


