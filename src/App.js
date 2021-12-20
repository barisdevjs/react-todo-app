import React, {useState,useEffect,useRef} from 'react';
import './App.css';
import TodoList from './Todolist';

const LOCALSTROAGE_KEY = 'tasksAppXxxx'; // anything is acceptable

function App() {
  const [tasks, setTasks] = useState([]); 
  const taskNameRef = useRef(); // html elementine ulaşmak için kullanılır.

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCALSTROAGE_KEY));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []); // [] empty array means run only once

  useEffect(() => {
    localStorage.setItem(LOCALSTROAGE_KEY, JSON.stringify(tasks));
  }, [tasks])

  function toggleTask(id) {
    const newTask = [...tasks];
    const task = newTask.find(task => task.id === id);
    task.completed = !task.completed;
    setTasks(newTask);
  }

  function addTask(e) {
    const name = taskNameRef.current.value;
    if (name === '') return;
    setTasks(prevTasks => {
      return [...prevTasks, {name, id: Date.now(), completed: false}]
    })
  }

  function deleteTask() {
    const newTask = tasks.filter(task => !task.completed);
    setTasks(newTask);
  }
  return (
    <>
      <TodoList elementOfArray={tasks} toggleTask={toggleTask} />
      <input ref={taskNameRef} type="text" />
      <button onClick={addTask} >Add Task</button>
      <button onClick={deleteTask}>Clear Completed</button>
      <div>{tasks.filter(task => !task.completed).length} left task</div>
    </>
  );
}

export default App;
