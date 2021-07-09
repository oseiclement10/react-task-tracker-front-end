const AddTask =()=>{
    return (
        <form className="form-container">
            
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"/>
            </div>
            <div className="checkbox form-control" >
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>
            <div className="form-control">
                <input type="submit" value="Save Task" className="btn-lng"/>
            </div>
            </form>
    )
    
}

export default AddTask;