import React from 'react';
import { style } from './style';

const display = {
  display: 'block',
};
const hide = {
  display: 'none',
};

export default class FlightModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
    };
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div
        className="modal"
        style={this.state.toggle ? { display: 'block' } : { display: 'none' }}
      >
        <div className="modal-content">
          <h6>Flights</h6>
        </div>
        <div className="modal-footer">
          <a className="btn-flat" onClick={this.toggle}>
            Flights
          </a>
        </div>
      </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>
          {this.state.toggle ? 'Close flights' : 'flights'}
        </a>
        {modal}

        <a href="http://partners.api.skyscanner.net/apiservices/pricing/v1.0"></a>
      </div>
    );
  }
}
