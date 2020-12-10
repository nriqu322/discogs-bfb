import { combineReducers } from 'redux';
import artistListReducer from './artistList';
import paginationReducer from './pagination';
import setParamsReducer from './setParams';
import modalReducer from './setModal';

const rootReducer = combineReducers({
  artistList: artistListReducer,
  dataPagination: paginationReducer,
  setParams: setParamsReducer,
  modal: modalReducer,
});

export default rootReducer;