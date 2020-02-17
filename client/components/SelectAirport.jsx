import React, { Component } from 'react';
// import
import { connect } from 'react-redux';
import { fetchAirportCodesThunk } from '../redux/airport';
import { setSelectedAirportCode } from '../redux/airport';
import { style } from './style';

class SelectAirport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  container = React.createRef();
  componentDidMount() {
    this.props.fetchAirportCodes();
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  handleClick = aCode => {
    // console.log('ev', ev);
    this.props.setSelectedAirportCode(aCode);
  };
  render() {
    if (!this.props.airport) {
      return <div> No airport</div>;
    } else {
      return (
        <div style={style.container}>
          <div ref={this.container}>
            <button style={style.button} onClick={this.handleButtonClick}>
              Select origin airport
            </button>

            <div style={style.dropdown}>
              <ul style={style.ul}>
                {this.state.open &&
                  this.props.airport.list.map(eachCode => {
                    return (
                      <li
                        onClick={() => this.handleClick(eachCode.airportcode)}
                        style={style.li}
                      >
                        {eachCode.airportcode}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  resorts: state.resorts,
  airport: state.airport,
});

const mapDispatchToProps = dispatch => ({
  fetchAirportCodes: () => dispatch(fetchAirportCodesThunk()),
  setSelectedAirportCode: code => dispatch(setSelectedAirportCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAirport);
