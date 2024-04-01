import React, { useState } from 'react';
import './index.css'; // Import CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to edit an existing task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  // Function to mark a task as completed or uncompleted
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Calculate the percentage of completed tasks
  const progress = tasks.length > 0 ? (tasks.filter(task => task.completed).length / tasks.length * 100).toFixed(2) : 0;

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h1>Todo List</h1>
        <div className="task-form">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add Task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="tasks">
          {tasks.map(task => (
            <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
              <input
                type="text"
                value={task.text}
                onChange={(e) => editTask(task.id, e.target.value)}
                className="edit-input"
              />
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
          <span>{`${tasks.filter(task => task.completed).length} / ${tasks.length} tasks completed`}</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
