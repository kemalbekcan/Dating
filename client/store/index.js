import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};

const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
    // middleware.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );


export default store;
