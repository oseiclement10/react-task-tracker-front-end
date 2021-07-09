import {FaTimes} from 'react-icons/fa'
const Task = ({task,ident,category,recall}) =>{
    return (
        <div className={`task ${category ? 'reminder':''}` } key = {ident} onDoubleClick={()=>recall(task._id)} >
            <h4>{task.title} <FaTimes className='glow' style = {{color:'red'}}/></h4>
            <p>{task.date}</p>           
            </div>
    )
}

export default Task;