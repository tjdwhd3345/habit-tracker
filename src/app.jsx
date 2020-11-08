import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Addform from './components/addform';
import Habits from './components/habits';
import Reset from './components/reset';

//function App() {
class App extends Component {
  state = {
    habits: [
      { id: 'habit1', name: 'Reading', count: 0 },
      { id: 'habit2', name: 'Running', count: 0 },
      { id: 'habit3', name: 'Coding', count: 0 },
    ],
    totalCounts: 0,
  };

  handleAddHabit = () => {};

  handleIncrement = (habit) => {
    // console.log('habits.jsx handleIncrement', habit);
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    const total = habits.filter((habit) => {
      return habit.count > 0;
    }).length;
    this.setState({ habits: habits, totalCounts: total });
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
    const total = habits.filter((habit) => {
      return habit.count > 0;
    }).length;
    this.setState({ habits: habits, totalCounts: total });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => {
      return item.id !== habit.id;
    });
    const total = habits.filter((habit) => {
      return habit.count > 0;
    }).length;
    this.setState({ habits: habits, totalCounts: total });
  };

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.map((habit) => (habit.count = 0));
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar totalCounts={this.state.totalCounts}></Navbar>
        <Addform></Addform>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        ></Habits>
        <Reset onReset={this.handleReset}></Reset>
      </>
    );
  }
}

export default App;
