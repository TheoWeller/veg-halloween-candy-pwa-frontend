import { LOADING, ERROR, CREATE, SAVE, EDIT } from '../actions/postActions'
import { initialState } from  './initialState'

export default (state = initialState, action) => {
  switch(action.type) {
    case CREATE:
      return {...state, userPosts: state.userPosts.push(action.payload)};
    case SAVE:
      return {...state, userPosts: state.userPosts.push(action.payload)};
    case EDIT:
      debugger
      return {}
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: true}
    default:
      return state;
    }
  }
