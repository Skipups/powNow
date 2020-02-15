import axios from 'axios';

const SET_WEATHER = 'SET_WEATHER';

export const setWeather = gotWeather => {
  const action = {
    type: SET_WEATHER,
    payload: gotWeather,
  };
  console.log('gotWeather', action);
  return action;
};
// not complete
export const fetchWeatherThunk = location => {
  console.log('loation from fetchWeatherThunk', location[0], location[1]);
  let latitude = location[0];
  let longitude = location[1];
  return async dispatch => {
    const weather = (
      await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/855cacab7ae18afccb0c8fa334711f17/${latitude},${longitude}?exclude=currently,minutely,hourly,flags`
      )
    ).data;
    return dispatch(setWeather(weather));
  };
};

const initialState = [];

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
