import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Sep 5th at 2:20pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Sep 10th 10:00am',
      remainder: false,

    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Sep 1st 12:00pm',
      remainder: false,

    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // DeleteTask
  const delTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id,
    ));
  };

  // Toggle remeinder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map(
        (task) => (task.id === id ? { ...task, remainder: !task.remainder } : task),
      ),
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleRemainder} /> : 'No Task for today!'}
    </div>
  );
}

export default App;
