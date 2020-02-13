import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
const Home = props => {
  const { passes } = props;

  if (passes.length === 0) return <h3>No Pass</h3>;
  //to do: redo layout as columns due to picture availability
  return (
    <div class="column">
      {passes.map(uniquePass => {
        return (
          <div class="row">
            <Link to={`/${uniquePass.name}/${uniquePass.id}`}>
              <img styles="width:100%" alt="complex" src={uniquePass.image} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ passes }) => ({ passes });

export default connect(mapStateToProps)(Home);
