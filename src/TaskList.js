import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onChangeTask }) => {
  return (
    <ul className="task-container">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onChangeTask={onChangeTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
