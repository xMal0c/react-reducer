import React from "react";
import { useState } from "react";

export const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
