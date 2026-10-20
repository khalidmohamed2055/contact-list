import {useState} from "react";
const ToDo = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [tasks, setTasks] = useState([
    "learn react",
    "learn react hooks",
    "learn react router",
    "learn react redux",
    "learn react redux",
  ]);
  const handleClick = ()=>{
    setTasks([...tasks, inputValue])
    setInputValue("")
    
  }
  const handleRemove = (index)=>{
     setTasks(tasks.filter((_, i)=>i !== index))
  }
  return (
     <>
     <h3>To Do List</h3>
     <ul>
       {tasks.map((task, index) => {
         return  <li key={index}>{task} <button onClick={()=>handleRemove(index)}>remove</button> </li>
           
       })}
     </ul>
     <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" placeholder="Add a task" />
     <button onClick={handleClick}>Add</button>
     </>)
}

export default ToDo
