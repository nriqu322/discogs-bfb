import { combineReducers } from 'redux';
import artistListReducer from './artistList';

const rootReducer = combineReducers({
  artistList: artistListReducer,
});

export default rootReducer;