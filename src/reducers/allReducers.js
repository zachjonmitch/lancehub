import { combineReducers } from 'redux';

import messageReducer from './messageReducer';
import discussionReducer from './discussionReducer';

export default combineReducers({
  messages: messageReducer,
  discussions: discussionReducer,
});
