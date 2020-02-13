import { combineReducers } from 'redux';
import passesReducer from './passes';
import resortsReducer from './resorts';

const appReducer = combineReducers({
  passes: passesReducer,
  resorts: resortsReducer,
});

export default appReducer;
