import React, {useState,useEffect,useRef} from 'react';
import './App.css';
import TodoList from './Todolist';

const LOCALSTROAGE_KEY = 'tasksAppXxxx'; // anything is acceptable

function App() {
  const [tasks, setTasks] = useState([]); 
  const taskNameRef = useRef(); // html elementine ulaşmak için kullanılır.

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCALSTROAGE_KEY));
    if (storedTasks) { // converts to an array
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

  function addTask() {
    const name = taskNameRef.current.value;
    if (name === '') return;
    setTasks(prevTasks => {
      return [...prevTasks, {name, id: Date.now(), completed: false}]
    })
    taskNameRef.current.value = null; 
  }

  function deleteTask() {
    const newTask = tasks.filter(task => !task.completed);
    setTasks(newTask);
  }
  return (
    <div className="App">
      <button className='blue' onClick={addTask} >Add Task</button>
      <button className='green'onClick={deleteTask}>Clear Completed</button>
      <input className='task' ref={taskNameRef} type="text" />
      <div>{tasks.filter(task => !task.completed).length > 1 ? tasks.filter(task => !task.completed).length +  ' tasks' :
       tasks.filter(task => !task.completed).length + ' task'}  left</div>
      <TodoList taskArr={tasks} toggler={toggleTask} />
    </div>
  );
}

export default App;
