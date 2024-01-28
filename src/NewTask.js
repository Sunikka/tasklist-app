import { useState } from "react";
import './styles/NewTask.css'

const NewTask = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
        // console.log(visible)
    }

    if(visible) {
        return(
            <div className="newTask">
                <div className="newButton">
                <button onClick={toggleVisible}>+New</button>
                </div>
                <div className="NewForm">
                    <form>
                        <label htmlFor="taskName">Task name</label><br></br>
                        <input type="text" id="taskName"></input><br></br>
                        <label htmlFor="taskDesc">Description</label><br></br>
                        <textarea type="text" id="taskDesc"></textarea><br></br>
                        <label htmlFor="taskDl">Deadline (optional)</label><br></br>
                        <input type="text" id="taskDl"></input><br></br>
                        <button>Create Task</button>
                    </form>
                </div>
            </div>
        )
    }else {
        return(
            <div className="newTask">
                <div className="newButton">
                    <button onClick={toggleVisible}>+New</button>
                </div>
            </div>
        )
    }

}
 
export default NewTask;