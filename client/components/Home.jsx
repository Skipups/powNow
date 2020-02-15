import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
const Home = props => {
  const { passes } = props;

  if (passes.length === 0) return <h3>No Pass</h3>;
  //to do: redo layout as columns due to picture availability
  //add input for starting airport code
  return (
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
  );
};
const mapStateToProps = ({ passes }) => ({ passes });

export default connect(mapStateToProps)(Home);
