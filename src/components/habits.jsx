import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 'habit1', name: 'Reading', count: 0 },
      { id: 'habit2', name: 'Running', count: 0 },
      { id: 'habit3', name: 'Coding', count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => {
          return <Habit key={habit.id} habit={habit} />;
        })}
      </ul>
    );
  }
}

export default Habits;
