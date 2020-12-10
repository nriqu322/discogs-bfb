import { SET_MODAL } from '../actions';

const modalReducer = (state = {modal: false}, action) => {
  switch(action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.modal,
      };
    default:
      return state;
  }
}

export default modalReducer;