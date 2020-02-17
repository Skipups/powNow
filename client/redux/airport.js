import axios from 'axios';

const SET_AIRPORTCODES = 'SET_AIRPORTCODES';
const SET_SELECTED = 'SET_SELECTED';

export const setAirportCodes = codes => {
  const action = {
    type: SET_AIRPORTCODES,
    payload: codes,
  };

  return action;
};

export const fetchAirportCodesThunk = () => {
  return async dispatch => {
    const codes = (await axios.get(`/api/airportcodes`)).data;

    return dispatch(setAirportCodes(codes));
  };
};

export const setSelectedAirportCode = updateCode => {
  const action = {
    type: SET_SELECTED,
    payload: updateCode,
  };
  return action;
};

export const setSelectedAirportCodeThunk = selectedCode => {
  return async dispatch => {
    const updateCode = (await axios.post(`/api/airportcodes`, selectedCode))
      .data;
    return dispatch(setSelectedAiportCode(updateCode));
  };
};

const initialState = { list: [], selected: '' };

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AIRPORTCODES:
      return {
        ...state,
        list: action.payload,
      };
    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default airportReducer;
