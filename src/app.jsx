import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
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
  };

  handleAddHabit = (habitName) => {
    const habits = [...this.state.habits];
    const hasHabit = habits.some((habit) => {
      return habit.name.toLowerCase() === habitName.toLowerCase();
    });
    if (!hasHabit) {
      habits.push({
        id: 'habit_' + habitName,
        name: habitName,
        count: 0,
      });
      this.setState({ habits: habits });
    } else {
      alert('이미 있는 Habit임.');
    }
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

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.forEach((habit) => (habit.count = 0));
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        ></Navbar>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAddHabit={this.handleAddHabit}
        ></Habits>
        <Reset onReset={this.handleReset}></Reset>
      </>
    );
  }
}

export default App;
