import axios from 'axios';

const SET_PASSES = 'SET_PASSES';

//return all passes
export const setPasses = passes => {
  const action = {
    type: SET_PASSES,
    payload: passes,
  };
  return action;
};

export const fetchPassesThunk = () => {
  return async dispatch => {
    const passes = (await axios.get('/api/passes')).data;

    return dispatch(setPasses(passes));
  };
};

const initialState = [];

const passesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSES:
      return action.payload;
    default:
      return state;
  }
};

export default passesReducer;
