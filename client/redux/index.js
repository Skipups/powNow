import { combineReducers } from 'redux';
import passesReducer from './passes';
import resortsReducer from './resorts';
import weatherReducer from './weather';
import airportReducer from './airport';

const appReducer = combineReducers({
  passes: passesReducer,
  resorts: resortsReducer,
  weather: weatherReducer,
  airport: airportReducer,
});

export default appReducer;
