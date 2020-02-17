import { combineReducers } from 'redux';
import passesReducer from './passes';
import resortsReducer from './resorts';
import airportReducer from './airport';
import singleResortReducer from './singleResort';

const appReducer = combineReducers({
  passes: passesReducer,
  resorts: resortsReducer,
  airport: airportReducer,
  singleResort: singleResortReducer,
});

export default appReducer;
