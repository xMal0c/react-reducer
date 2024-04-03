import React from "react";
import { useState } from "react";

export const Task = ({ task, onDeleteTask, onChangeTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({ ...task, text: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)} className="save-button">
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)} className="edit-button">
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <input
        className="task"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </>
  );
};

export default Task;
