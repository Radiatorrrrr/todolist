import {useState} from 'react';
import Task from './Components/Task/Task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {id: '1', text: 'Buy milk'},
    {id: '2', text: 'Wolk eith dog'},
    {id: '3', text:'Do homework'}
  ]);

  const deleteTask=(id)=>{
    const arr = tasks.filter(task => task.id !=id)
    setTasks(arr)
  }
  

  return (
    <>
      // Форма создания таски - ребенок
     { 
     tasks.map(task=> (
     <Task 
     key={task.id} 
     task={task}
     deleteTask={id=> deleteTask(id)}/>
    ))
     }

    </>
  )
}

export default App
