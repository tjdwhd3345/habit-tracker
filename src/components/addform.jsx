import React, { Component } from 'react';

class Addform extends Component {
  handleAddHabit = () => {
    const iptObj = document.getElementById('ipt1');
    this.props.onAddHabit(iptObj.value);
  };
  render() {
    return (
      <>
        <input className="add-input" type="text" id="ipt1" />
        <button className="add-button" onClick={this.handleAddHabit}>
          Add
        </button>
      </>
    );
  }
}

export default Addform;
