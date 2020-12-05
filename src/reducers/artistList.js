import { GET_ARTIST_LIST } from '../actions';

const artistListReducer = (state = [], action) => {
  switch(action.type) {
    case GET_ARTIST_LIST:
      return [...state, action.artistList];
    default:
      return state;
  }
}

export default artistListReducer;