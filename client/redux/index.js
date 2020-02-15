import { combineReducers } from 'redux';
import passesReducer from './passes';
import resortsReducer from './resorts';
import weatherReducer from './weather';

const appReducer = combineReducers({
  passes: passesReducer,
  resorts: resortsReducer,
  weather: weatherReducer,
});

export default appReducer;
