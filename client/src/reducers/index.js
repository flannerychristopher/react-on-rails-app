import { combineReducers } from 'redux';

import UsersReducer from './reducer_users';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});

export default rootReducer;
