import {createStore, combineReducers, applyMiddleware} from 'redux';
import login from '../_reducers/auth';
import {logger, promise} from '../middleware';

// Global state
const rootReducers = combineReducers({
  login,
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
