import { combineReducers } from 'redux';
import session from './session';
import post from './post';

export default combineReducers({
  session,
  post
});
