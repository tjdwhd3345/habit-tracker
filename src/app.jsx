import React, { useCallback, useState } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';
import Reset from './components/reset';

const App = () => {
  console.log('app.jsx render');
  const [habits, setHabits] = useState([
    { id: 'habit1', name: 'Reading', count: 0 },
    { id: 'habit2', name: 'Running', count: 0 },
    { id: 'habit3', name: 'Coding', count: 0 },
  ]);

  const handleAddHabit = useCallback((habitName) => {
    console.log('handleAddHabit', habitName);
    const hasHabit = habits.some((habit) => {
      return habit.name.toLowerCase() === habitName.toLowerCase();
    });
    if (!hasHabit) {
      habits.push();
      setHabits((habits) => {
        return [
          ...habits,
          {
            id: 'habit_' + habitName,
            name: habitName,
            count: 0,
          },
        ];
      });
    } else {
      alert('이미 있는 Habit임.');
    }
  }, []);

  const handleIncrement = useCallback((habit) => {
    // console.log('habits.jsx handleIncrement', habit);
    setHabits((habits) => {
      return habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: item.count + 1 };
        }
        return item;
      });
    });
  }, []);

  const handleDecrement = useCallback((habit) => {
    console.log('habits.jsx handleDecrement', habit);
    setHabits((habits) => {
      return habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return {
            ...habit,
            count: count < 0 ? 0 : count,
            /* count: (--item.count, item.count < 0 ? 0 : item.count), */
          };
        }
        return item;
      });
    });
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => {
      return habits.filter((item) => {
        return item.id !== habit.id;
      });
    });
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) => {
      return habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      });
    });
  }, []);

  return (
    <>
      <Navbar
        totalCount={habits.filter((item) => item.count > 0).length}
      ></Navbar>
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAddHabit={handleAddHabit}
      ></Habits>
      <Reset onReset={handleReset}></Reset>
    </>
  );
};

export default App;
