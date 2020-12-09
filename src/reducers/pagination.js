import { SET_PAGINATION } from '../actions';

const paginationReducer = (state = [], action) => {
  switch(action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        ...action.dataPagination,
      };
    default:
      return state;
  }
}

export default paginationReducer;