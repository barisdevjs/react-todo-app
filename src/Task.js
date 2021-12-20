import React from 'react'

function Task({task,toggleTask}) {
    function handleTaskClick() {
        toggleTask(task.id);
    }

    return (
        <div>
            <label >
                <input type="checkbox" checked={task.completed} onChange={handleTaskClick} />
                {task.completed ? <strike>{task.name.toUpperCase()}</strike> : task.name}
            </label>
        </div>
    )
}

export default Task
