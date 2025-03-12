import { useState } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

function App() {
  // стейт для всех задач
  const [tasks, setTasks] = useState([
    { id: "1", text: "Buy milk" },
    { id: "2", text: "Wolk with dog" },
    { id: "3", text: "Do homework" },
  ]);
  // стейт для текущей задачи
  const [currentTask, setCurrentTask] = useState("");

  const deleteTask = (id) => {
    const arr = tasks.filter((task) => task.id != id);
    setTasks(arr);
  };

  const onInputChange = (e) => {
    setCurrentTask(e.target.value);
  };
  const handleAddTask = (e) => {
    if (currentTask.trim() != '') {
      const newTask = {
        id: new Date(),
        text: currentTask,
      }
      setTasks(prev=>[...prev, newTask])
      setCurrentTask('')
    }
  }
  return (
    <>
      <AddTaskForm
        currentTask={currentTask}
        onInputChange={(e) => onInputChange(e)}
        handleAddTask={(e) => handleAddTask(e)}
      />
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default App;
