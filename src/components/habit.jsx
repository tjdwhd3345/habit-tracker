import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  console.log('habit.jsx');
  const handleIncrement = () => {
    //   //console.log('increaseCount: ', event);
    //   //이런식으로 직접 state 변수를 set 만 하면 리액트가 변화를 감지하지 못함.
    //   //state.count += 1;
    //   //setState 메소드를 사용하자
    //   setState({ count: state.count + 1 });
    onIncrement(habit);
  };

  const handleDecrement = () => {
    //   const count = state.count - 1;
    //   setState({ count: count < 0 ? 0 : count });
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
