import Task from './Task';
const Tasks = ({task,remind,delTrigger}) =>{
    return (
        <>
        {task.map((task,index)=>{
           return <Task key = {index} task ={task} category={task.reminder} recall = {remind} trigger={delTrigger}/>
        })}
        </>
    )
}
export default Tasks;