import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectAirport from './SelectAirport';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import { style } from './style';
const Home = props => {
  const { passes } = props;

  if (passes.length === 0) return <h3>No Pass</h3>;
  return (
    <div style={{ position: 'relative' }}>
      <div>
        <SelectAirport />
      </div>
      <div
        style={{
          border: '3px solid white',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {passes.map(uniquePass => {
          return (
            <div class="row">
              <Link to={`/passes/${uniquePass.id}`}>
                <img
                  style={{
                    height: '30%',
                    width: '30%',
                    alignItems: 'center',
                    padding: '0 2rem',
                  }}
                  src={uniquePass.image}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  passes: state.passes,
  airport: state.airport,
});

export default connect(mapStateToProps)(Home);
