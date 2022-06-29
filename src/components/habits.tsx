import React from 'react';
import Habit from './habit';
import { HabitProps } from '../app'

export interface HabitsCompFuncProps {
  onIncrement: (habit: HabitProps) => void
  onDecrement: (habit: HabitProps) => void
  onDelete: (habit: HabitProps) => void
}
interface HabitsCompProps extends HabitsCompFuncProps{ 
  habits: HabitProps[]
}

const Habits = ({ habits, onIncrement, onDecrement, onDelete }: HabitsCompProps) => {
  // console.log('habits.jsx');
  return (
    <>
      <ul className='habits no-scroll'>
        {habits.map((habit: HabitProps) => {
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
