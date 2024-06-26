// This is the main component of the app. It contains the AddTask and TaskList components.
// The tasks state is managed by the useReducer hook, which uses the TasksReducer function to update the state based on the action type.
// The handleAddTask, handleDeleteTask, and handleChangeTask functions dispatch actions to update the tasks state here.

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TasksReducer from "./TasksReducer";
import { useReducer } from "react";

function App() {
  const [tasks, dispatch] = useReducer(TasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  function handleChangeTask(changedTask) {
    dispatch({
      type: "changed",
      changedTask: changedTask,
    });
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
