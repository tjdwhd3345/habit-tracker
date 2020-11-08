import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCounts}</span>
      </div>
    );
  }
}

export default Navbar;
