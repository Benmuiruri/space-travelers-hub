/* eslint-disable import/no-extraneous-dependencies */
import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MissionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: MissionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
