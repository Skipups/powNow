import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchWeatherThunk } from '../redux/weather';
import { Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactAnimatedWeather from 'react-animated-weather';

//function to convert UNIX time stamp to date
function getDate(unixNum) {
  const dateObj = new Date(unixNum * 1000);
  return dateObj.toUTCString().slice(0, 11);
}
//function to convert percipitation to inches
function convertToInches(cmNum) {
  if (!cmNum) return 0;
  return (cmNum * 0.39).toFixed(2);
}

function convertIconName(iconName) {
  //clear-day

  return iconName
    .toUpperCase()
    .split('-')
    .join('_');
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let coordinates = this.props.coordinates;
    this.props.fetchWeather(coordinates);
  }

  render() {
    const weatherData = this.props.weather.daily;

    if (!weatherData) {
      return <div>PrayForSnow</div>;
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          {weatherData.data.map(eachDay => {
            const iconName = convertIconName(eachDay.icon);
            return (
              <div>
                <Grid
                  name="outer"
                  item
                  direction="column"
                  item
                  key={eachDay.time}
                >
                  <Card margin="1rem" direction="column" item xs={6} sm={3}>
                    <ReactAnimatedWeather icon={iconName} />
                    <CardContent>
                      <Typography gutterBottom variant="caption" component="h2">
                        {getDate(eachDay.sunsetTime)}
                      </Typography>
                      {/* insert icon here */}
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        component="p"
                      >
                        accum:
                        {convertToInches(eachDay.precipAccumulation)}inches
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        component="p"
                      >
                        precp type:
                        {eachDay.precipType ? eachDay.precipType : 'none'}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" color="primary">
                        Flights
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: coordinates => dispatch(fetchWeatherThunk(coordinates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
