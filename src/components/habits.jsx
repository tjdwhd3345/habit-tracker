import React, { Component } from 'react';
import Habit from './habit';
import Addform from './addform';

class Habits extends Component {
  render() {
    console.log('habits.jsx');
    return (
      <>
        <Addform onAddHabit={this.props.onAddHabit}></Addform>
        <ul>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default Habits;
