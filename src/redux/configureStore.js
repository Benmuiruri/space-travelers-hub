/* eslint-disable import/no-extraneous-dependencies */
import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer, { fetchRocketsAPI } from './rockets/rockets';

import MissionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: MissionsReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRocketsAPI());

export default store;
