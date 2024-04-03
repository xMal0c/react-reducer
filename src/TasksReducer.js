export const TasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      if (action.text.trim() !== "") {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      return tasks;
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "changed": {
      return tasks.map((task) =>
        task.id === action.changedTask.id ? action.changedTask : task
      );
    }
    default: {
      return tasks;
    }
  }
};
export default TasksReducer;
