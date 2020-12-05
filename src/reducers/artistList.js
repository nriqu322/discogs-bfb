import { GET_ARTIST_LIST, SET_CURRENT_CARD } from '../actions';

const initialState = {
  artistList: [],
  currentCard: null,
};

const artistListReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTIST_LIST:
      return [...state, action.artistList];
    case SET_CURRENT_CARD:
      return [...state, action.currentCard]
    default:
      return state;
  }
}

export default artistListReducer;