import Task from './Task';
const Tasks = ({task}) =>{
    return (
        <>
        {task.map((task,index)=>{
           return <Task key = {index} task ={task}/>
        })}
        </>
    )
}
export default Tasks;