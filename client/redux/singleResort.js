import axios from 'axios';

export const SET_SINGLE_RESORT_WEATHER = 'SET_SINGLE_RESORT_WEATHER';

export const setSingleResortWeather = weather => {
  console.log('!!!!!!!incoming weather', weather);
  const action = {
    type: SET_SINGLE_RESORT_WEATHER,
    payload: weather,
  };
  console.log('!!!action inside setSingleResortWeather', action);
  return action;
};

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
    console.log('weather insdie fetchWeatherThunk', weather);
    return dispatch(setSingleResortWeather(weather));
  };
};

const initialState = [];

const singleResortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_RESORT_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
export default singleResortReducer;
