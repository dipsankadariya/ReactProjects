import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["eat pizza", "new laptop", "run run"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todolist">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addNewTask}>
          Add new task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-up-btn" onClick={() => moveTaskUp(index)}>
              Move Up
            </button>
            <button className="move-down-btn" onClick={() => moveTaskDown(index)}>
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
