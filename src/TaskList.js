import { useEffect, useState } from 'react'
import './styles/TaskList.css'
import useFetch from './useFetch';

// dataUrl: The endpoint from where the list items are fetched
const TaskList = ({dataUrl}) => {
    // for fetch testing
    const fakeDataUrl = "http://localhost:8000/tasks"
    //  npx json-server --watch fakedata/fakeData.json --port 8000

    const { data: tasks, isLoading, error } = useFetch(dataUrl);

    return (
        <div className="tasklist">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading tasks...</div>}
            {tasks && tasks.map((task) => (
            <div className="task-preview" key={task.id}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>{task.deadline}</p>
                <button ></button>
            </div>
           ))}
        </div>
    )
}
 
export default TaskList;