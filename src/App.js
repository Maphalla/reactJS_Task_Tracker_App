import { useState ,useEffect} from "react"
import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";
import logo from './logo1.png'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import "./index"



const App = () => {
  const [showAddTask , setShowAddTask] = useState(JSON.parse(localStorage.getItem('showAddTask')) || false)

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [
        {
            id:1,
            text:"Micro Test 2",
            day:"June 2nd at 14:00 ",
            reminder:true,
        },
        {
            id:2,
            text:"Visual Programming practical submission",
            day:"June 10th at 09:00 ",
            reminder:true,
        },
        {
            id:3,
            text:"Data Structures class",
            day:"July 2nd at 14:00 ",
            reminder:false,
        }
        ]   
   )

   useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks))
   },[tasks])  
  
   //Toggle reminder
   const toggleReminder=(id)=>{
    setTasks(tasks.map(
      (task)=>
        task.id === id ? {
          ...task ,
          reminder: ! task.reminder
        } : task 
     ))
   }

  //  //Add task
   const addTask =(task)=>{
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask ={id , ...task}
   setTasks([...tasks , newTask])
   }
 
   //DeleteTask function
   const deleteTask =(id)=>{
       setTasks(tasks.filter(
        (task)=>
          task.id !== id  
       ))
      //  console.log("test removed",id)
   }

   const toggleForm=()=>{
    setShowAddTask(!(showAddTask))
   }

  return (
    <Router>
    <div className="container">
    <Header title="Task Tracker" onShow={toggleForm} showForm={showAddTask}  />
      <Routes>
        <Route path='/' exact Component={
          (props)=>(
            <>
            { showAddTask && <AddTask color='teal' name='Save Task' onAdd={addTask}/> }
            {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "No tasks to show"}
            </>
          )
        }/>
      <Route path="/about" Component={About}/>
      </Routes>
      <Footer text="copyright &copy; |Maphalla| 2023" logo={logo}/>   
    </div>
    </Router>
  );
}

export default App;
