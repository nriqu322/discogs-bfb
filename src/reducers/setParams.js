import { SET_ARTIST_PARAM, SET_TRACK_PARAM } from '../actions';

const initialState = {
  artist: 'nirvana',
  track: 'nevermind',
};

const setParamsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTIST_PARAM:
      return {
        ...state,
        ...action.artist,
      };
    case SET_TRACK_PARAM:
      return {
        ...state,
        ...action.track,
      }
    default:
      return state;
  }
}

export default setParamsReducer;