import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import appReducer from './redux';

let middleware = [thunkMiddleware.withExtraArgument({ axios })];

if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })];
}
export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(...middleware))
);
