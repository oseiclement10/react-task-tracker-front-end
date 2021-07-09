import Header from './components/header';
import Tasks from './components/Tasks';
import {useState,useEffect} from 'react';

function App() {
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
  return (
    <div className="container">   
    <Header/>
    <Tasks task = {tasks}/>
    </div>
  );
}

export default App;
