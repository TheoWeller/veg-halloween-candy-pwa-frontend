import { LOADING, ERROR, CREATE } from '../actions/postActions'
import { initialState } from  './initialState'

export default (state = initialState, action) => {
  switch(action.type) {
    case CREATE:
      return {...state, userPosts: state.userPosts.push(action.payload)};
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: true}
    default:
      return state;
    }
  }
