import React from 'react';
import { connect } from 'react-redux';

import { fetchWeatherThunk } from '../redux/weather';
import { Card, Grid } from '@material-ui/core';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactAnimatedWeather from 'react-animated-weather';
import Flights from './Flights';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { style } from './style';

//function to convert UNIX time stamp to date
function getDate(unixNum) {
  const dateObj = new Date(unixNum * 1000);
  return dateObj.toUTCString().slice(0, 11);
}

//function for outbound date yyyy-mm-dd”

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
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  componentDidMount() {
    let coordinates = this.props.coordinates;
    console.log('coordinates in CDM weahter', coordinates);
    this.props.fetchWeather(coordinates);
  }

  render() {
    const weatherData = this.props.weather.daily;
    const { destinationAirCode } = this.props;
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

                    <div>
                      <button onClick={this.openModal}>Flights</button>
                      <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={style.modalContent}
                        contentLabel="Example Modal"
                      >
                        <h2 ref={subtitle => (this.subtitle = subtitle)}>
                          Hello
                        </h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                          <input />
                          <button>tab navigation</button>
                          <button>stays</button>
                          <button>inside</button>
                          <button>the modal</button>
                        </form>
                      </Modal>
                    </div>
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
