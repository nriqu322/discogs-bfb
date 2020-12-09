import { combineReducers } from 'redux';
import artistListReducer from './artistList';
import paginationReducer from './pagination';
import setParamsReducer from './setParams';

const rootReducer = combineReducers({
  artistList: artistListReducer,
  dataPagination: paginationReducer,
  setParams: setParamsReducer,
});

export default rootReducer;