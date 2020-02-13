import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchResortsThunk } from './redux/resorts';

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
    console.log('this.props inside ShowResorts', this.props);

    return <div>hi</div>;
  }
}
const mapStateToProps = state => ({
  resorts: state.resorts,
});

const mapDispatchToProps = dispatch => ({
  fetchResorts: passId => dispatch(fetchPassesThunk(passId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowResorts);
