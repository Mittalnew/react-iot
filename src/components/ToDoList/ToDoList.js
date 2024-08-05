import React, { useState } from 'react';
import { FaCheck, FaTrash, FaPlus } from 'react-icons/fa';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project proposal', completed: false },
    { id: 2, text: 'Buy groceries', completed: true },
    { id: 3, text: 'Schedule dentist appointment', completed: false },
    { id: 4, text: 'Read 30 pages of book', completed: false },
    { id: 5, text: 'Go for a run', completed: true },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My To-Do List</h2>
      
      <form onSubmit={addTask} className="mb-4">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            <FaPlus />
          </button>
        </div>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-3 mb-2 rounded ${
              task.completed ? 'bg-green-100' : 'bg-gray-100'
            } transition duration-300 ease-in-out`}
          >
            <span
              className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}
            >
              {task.text}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => toggleTask(task.id)}
                className={`mr-2 ${
                  task.completed ? 'text-green-500' : 'text-gray-500'
                } hover:text-green-700 focus:outline-none`}
              >
                <FaCheck />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;