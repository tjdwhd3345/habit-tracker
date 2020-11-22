import React, { Component } from 'react';

class Reset extends Component {
  render() {
    console.log('reset.jsx');
    return (
      <>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Reset;
