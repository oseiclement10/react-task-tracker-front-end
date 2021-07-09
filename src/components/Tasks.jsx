import Task from './Task';
const Tasks = ({task,remind}) =>{
    return (
        <>
        {task.map((task,index)=>{
           return <Task key = {index} task ={task} category={task.reminder} recall = {remind}/>
        })}
        </>
    )
}
export default Tasks;