import React, { useState } from 'react'
import { FaCheck ,FaTrash,FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

import '../App.css'

const Taskform = () => {
    const [task, settask] = useState('')
    const [date, setdate] = useState('')
    const [tasks, settasks] = useState([])
    const [comtasks, setcomtasks] = useState([])
    const completetask=(key)=>
    {
      setcomtasks(prev=>[...prev,tasks[key]])
      deletetask(key)
    }
    const handletask=(e)=>
    {
         e.preventDefault()
         if(task.trim()!='' || date.trim()!='')
         {
        settasks(prev=>[...prev,[task,date]])
         }
        
        console.log(tasks);
    }
    const deletetask = (key) => {
        settasks(prev => prev.filter((_, index) => index !== key));
        settask('')
       
    };
    
  return (
    
    <>
    <form action="post" className='taskform'>
        <input type="text" value={task} onChange={e=>settask(e.target.value)} name='task'/>
        <input type="date" name="taskdate" id="" onChange={e=>setdate(e.target.value)}/>
         <button onClick={handletask}>ADD</button>
         
    </form>
    <h2 className='tasks-cont'>PENDING TASKS <BiTask/> </h2>
    {tasks && tasks.map((val,key)=>
    {
        console.log(val);
       return<><li className='tasks-li'>{val[0]} {val[1]}<button onClick={()=>deletetask(key)}><FaTrash /></button>
       <button onClick={()=>completetask(key)}><FaCheck /></button> </li>
         
        </>})}
    <h2 className='tasks-cont'>COMPLETED TASKS <BiTask/> </h2>
    {comtasks && comtasks.map((val,i)=>
    {
      return <li className='tasks-li'>{val[0]}  {val[1]}</li>
    })}
    </>
  )
}

export default Taskform