import { LOADING, ERROR, CREATE, SAVE, EDIT, DELETE } from '../actions/postActions'
import { initialState } from  './initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: true}
    default:
      return state;
    }
  }
