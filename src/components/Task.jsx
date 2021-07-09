import {FaTimes} from 'react-icons/fa'
const Task = ({task,ident,category,recall,trigger}) =>{
    return (
        <div className={`task ${category ? 'reminder':''}` } key = {ident} onDoubleClick={()=>recall(task._id)} >
            <h4>{task.title} <FaTimes className='glow' style = {{color:'red'}} onClick={()=>trigger(task._id)}/></h4>
            <p>{task.date}</p>           
            </div>
    )
}

export default Task;