import { GET_ARTIST_LIST, SET_CURRENT_CARD } from '../actions';

const initialState = {
  artistList: [],
  currentCard: [],
  trackList: [],
};

const trackListReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTIST_LIST:
      return {
        ...state,
        artistList: action.artistList,
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.currentCard,
      };
    // case SET_TRACKLIST:
    //   return {
    //     ...state,
    //     trackList: action.trackList,
    //   }
    default:
      return state;
  }
}

export default trackListReducer;