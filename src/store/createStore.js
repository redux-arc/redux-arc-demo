import { createStore, applyMiddleware, compose } from 'redux';
import { createAsyncMiddleware } from 'redux-arc';
import rootReducer from './rootReducer';
import asyncTask from './asyncTask';

let composeEnhancers = compose;

// eslint-disable-next-line no-underscore-dangle
if (window.__DEV__ || process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// create the async middleware
const asyncMiddleware = createAsyncMiddleware(asyncTask);

// set it to the Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(asyncMiddleware)),
);

export default store;
