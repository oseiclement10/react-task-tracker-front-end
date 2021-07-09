import {FaTimes} from 'react-icons/fa'
const Task = ({task,ident}) =>{
    return (
        <div className="task" key = {ident}>
            <h4>{task.title} <FaTimes className='glow' style = {{color:'red'}}/></h4>
            <p>{task.date}</p>
            
            </div>
    )
}
export default Task;