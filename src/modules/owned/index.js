import { ADD_POKEMON, RELEASE_POKEMON } from '../constants';

const ownedReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_POKEMON:
      return [
        ...state,
        actions.pokemon
      ];
    case RELEASE_POKEMON:
      const index = state.findIndex(e => e.id === actions.pokemon);
      const newState = [...state.splice(index, 0)];
      return newState;
    default:
      return state;
  }
};

export default ownedReducer;