import React from 'react';
import Habit from './habit';
import Addform from './addform';

const Habits = ({ habits, onAddHabit, onIncrement, onDecrement, onDelete }) => {
  // console.log('habits.jsx');
  return (
    <>
      <Addform onAddHabit={onAddHabit}></Addform>
      <ul className='habits no-scroll'>
        {habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Habits;
