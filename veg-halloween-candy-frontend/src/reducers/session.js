import { LOGIN, LOGOUT, LOADING, ERROR } from '../actions/sessionActions'
import { DELETE_POST, CREATE_POST, SAVE_POST, EDIT_POST} from '../actions/postActions'
import { initialState } from  './initialState'

export default (state = initialState, action) => {
  //add post helper
  const addPostToUserPosts = (post) => {
    const updatedUserPosts = state.userPosts;
    updatedUserPosts.push(post);
    return updatedUserPosts;
  }

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
      localStorage.removeItem("vhcToken");
      location.pathname = "/";
      return {...initialState, loading: false}
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return { initialState }
      case CREATE_POST:
        return {...state, userPosts: action.payload};
      case SAVE_POST:
        return {...state, userPosts: addPostToUserPosts(action.payload)};
      case EDIT_POST:
        return {...state, userPosts: action.payload};
      case DELETE_POST:
        return {...state, userPosts: action.payload};
    default:
      return state;
    }
  }
