import React, { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Addform from './components/addform';
import Habits from './components/habits';
import Reset from './components/reset';

export interface HabitProps {
  id: string,
  name: string,
  count: number
}

const App = () => {
  // console.log('app.jsx render');
  const [habits, setHabits] = useState<HabitProps[]>([
    { id: 'habit1', name: 'Reading', count: 0 },
    { id: 'habit2', name: 'Running', count: 0 },
    { id: 'habit3', name: 'Coding', count: 0 },
    { id: '4', name: '물마시기', count: 0 },
    { id: '5', name: '술마시기', count: 0 },
    { id: '6', name: '커피마시기', count: 0 },
    { id: '7', name: '산책하기', count: 0 },
    { id: '8', name: '걷기', count: 0 },
    { id: '9', name: '전화하기', count: 0 },
    { id: '10', name: '노래듣기', count: 0 },
    { id: '11', name: '노래부르기', count: 0 },
    { id: '12', name: '가', count: 0 },
    { id: '13', name: '나', count: 0 },
  ]);

  const handleAddHabit = useCallback((habitName: string) => {
    // console.log('handleAddHabit', habitName);
    const hasHabit: boolean = habits.some((habit: HabitProps) => {
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
      alert('같음 이름의 습관이 있습니다');
    }
  }, [habits]);

  const handleIncrement = useCallback((habit: HabitProps) => {
    // console.log('habits.jsx handleIncrement', habit);
    setHabits((habits) => {
      return habits.map((item: HabitProps) => {
        if (item.id === habit.id) {
          return { ...habit, count: item.count + 1 };
        }
        return item;
      });
    });
  }, []);

  const handleDecrement = useCallback((habit: HabitProps) => {
    // console.log('habits.jsx handleDecrement', habit);
    setHabits((habits) => {
      return habits.map((item: HabitProps) => {
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

  const handleDelete = useCallback((habit: HabitProps) => {
    setHabits((habits) => {
      return habits.filter((item: HabitProps) => {
        return item.id !== habit.id;
      });
    });
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) => {
      return habits.map((habit: HabitProps) => {
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
      />
      <Addform onAddHabit={handleAddHabit} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
      <Reset onReset={handleReset}/>
    </>
  );
};

export default App;
