import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/addTask';
import {useState,useEffect} from 'react';

function App() {
  const [toggelAO,setToggle] = useState(false);
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
       const getTasks = async () =>{
          const tasksFromServer = await fetchTasks();
          setTasks(tasksFromServer);
       }
       getTasks();
  });
    
  const editRemind = async (id) => {
     const feedback = await fetch(`http://localhost:5000/task/${id}`,{method:"PATCH"});
    }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/task',{method:"GET"});
    const data = await res.json();
    return data;
 }
    const createNewTask = async (task)=>{
       const ress = await fetch('http://localhost:5000/task/newpost',{method:"POST",body:JSON.stringify(task),headers:{'Content-type':'application/json'}});
      if (ress.status===200){
        alert('added successsfully');
      }else{
        console.log("failed");
      }
      }

    const deleteTask = async (id) =>{
        const res = await fetch(`http://localhost:5000/task/${id}`,{method:"DELETE"});
    }
 
const toggleAdd = () =>{
    setToggle(!toggelAO);
}
  return (
    <div className="container">   
    <Header toggle={toggleAdd} onoff = {toggelAO}/>  
    {toggelAO && <AddTask onAdd={createNewTask}/>}
    <Tasks task = {tasks} remind={editRemind} delTrigger = {deleteTask}/>
    </div>
  );

}
export default App;
