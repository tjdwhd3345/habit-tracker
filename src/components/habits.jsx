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

  handleIncrement = (habit) => {
    // console.log('habits.jsx handleIncrement', habit);
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;

    this.setState({ habits: habits });
    // this.setState({ habits }); // 위와 동일한 코드
  };

  handleDecrement = (habit) => {
    // console.log('habits.jsx handleDecrement', habit);
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    // const count = habits[idx].count - 1;
    // habits[idx].count = count < 0 ? 0 : count;
    habits[idx].count =
      (habits[idx].count--, habits[idx].count < 0 ? 0 : habits[idx].count);
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => {
      return item.id !== habit.id;
    });
    this.setState({ habits: habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default Habits;
