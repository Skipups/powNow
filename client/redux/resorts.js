import axios from 'axios';

const SET_RESORTS = 'SET_RESORTS';

//return all resorts
export const setResorts = resorts => {
  const action = {
    type: SET_RESORTS,
    payload: resorts,
  };
  return action;
};

export const fetchResortsThunk = passId => {
  return async dispatch => {
    const resorts = (await axios.get(`/api/resorts/${passId}`)).data;

    return dispatch(setResort(resorts));
  };
};

const initialState = [];

const resortsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESORTS:
      return action.payload;
    default:
      return state;
  }
};

export default resortsReducer;
