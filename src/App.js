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

  

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/task',{method:"GET"});
    const data = await res.json();
    return data;
 }

 const toggleAdd = () =>{
    setToggle(!toggelAO);
 }
  return (
    <div className="container">   
    <Header toggle={toggleAdd} onoff = {toggelAO}/>  
    {toggelAO && <AddTask />}
    <Tasks task = {tasks}/>
    </div>
  );
}

export default App;
