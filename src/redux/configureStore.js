import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import albums from './albums/albums';

const rootReducer = combineReducers({
  albums,

});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
