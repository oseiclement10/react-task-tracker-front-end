import {useState} from 'react';

const AddTask =({onAdd})=>{

    const [title,setTitleText] = useState('');
    const [date,setDayTime] = useState('');
    const [reminder,setReminderr] = useState(false);

    const submit = (e) =>{
        e.preventDefault();
        if(!title){
            alert('enter a text ');
        }else if(!date){
            alert("provide day and time")
        }
         onAdd({title,date,reminder});
        setTitleText('');
        setDayTime('');
        setReminderr(false);
        return;
    }
    return (
        <form className="form-container" onSubmit = {submit}>
            <div className="form-control">
                <label>Task</label>
                <input name="title" type="text" placeholder="Add Task" value={title} onChange={(e)=>setTitleText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" name="date" placeholder="Add Day & Time" value={date} onChange={(e)=>setDayTime(e.target.value)}/>
            </div>
            <div className="checkbox form-control" >
                <label>Set Reminder</label>
                <input type="checkbox"  name = "reminder" value={reminder} onChange={(e)=>setReminderr(e.currentTarget.checked)}/>
            </div>
            <div className="form-control">
                <input type="submit" value="Save Task" className="btn-lng"/>
            </div>
            </form>
    )
}

export default AddTask;