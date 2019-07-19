import { LOGIN, LOGOUT, LOADING, ERROR } from '../actions/sessionActions'
import { initialState } from  './initialState'

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        loading: false,
        currentUser: action.payload.current_user,
        userPosts: action.payload.posts,
        token: action.payload.token
      }
    case LOGOUT:
      localStorage.removeItem("vhcToken")
      return {...initialState, loading: false}
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: true}
    default:
      return state;
    }
  }
