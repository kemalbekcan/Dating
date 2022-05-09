import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    task: taskReducer,
    route: routeReducer
})

export default rootReducer