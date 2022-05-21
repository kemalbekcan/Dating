import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  route: routeReducer,
  user: userReducer,
});

export default rootReducer;
