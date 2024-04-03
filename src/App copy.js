// This is a copy of App.js without the useReducer hook.

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    if (!text) {
      return;
    }
    const newTask = { id: nextId++, text: text, done: false };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleChangeTask(changedTask) {
    setTasks(
      tasks.map((task) => {
        if (task.id === changedTask.id) {
          return changedTask;
        } else {
          return task;
        }
      })
    );
  }
  return (
    <>
      <div className="card">
        <div className="title-container">
          <h2>Prague itinerary</h2>
          <a
            href="https://www.prague.eu/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/prague.png" alt="Prague icon" className="icon" />
          </a>
        </div>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onChangeTask={handleChangeTask}
        />
      </div>
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 1, text: "Morning: Charles Bridge", done: false },
  { id: 2, text: "Afternoon: Old Town Square", done: false },
  { id: 3, text: "Evening: Prague Castle", done: false },
];

export default App;
