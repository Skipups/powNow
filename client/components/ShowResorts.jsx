import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchResortsThunk } from '../redux/resorts';
import Weather from './Weather';
import { Grid, Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';

//bring in all resorts assiciated with selected pass
class ShowResorts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchResorts(id);
  }
  render() {
    if (!this.props.resorts) {
      return <div> No resorts</div>;
    } else {
      return (
        <div>
          {this.props.resorts.map(resort => {
            return (
              // <Box flexDirection="row">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '1rem 0',
                  // justifyContent: 'space-between',
                }}
              >
                <div style={{ padding: '0 2rem' }}>
                  <img
                    style={{
                      maxHeight: '100px',
                      maxWidth: '100px',
                      display: 'inline-block',
                    }}
                    alt="complex"
                    src={resort.image}
                  />
                </div>
                <Weather coordinates={resort.location} />
              </div>

              // </Box>
            );
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  resorts: state.resorts,
});

const mapDispatchToProps = dispatch => ({
  fetchResorts: passId => dispatch(fetchResortsThunk(passId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowResorts);
