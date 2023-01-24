import React from 'react'

function Task({ task, toggler }) {
    function handleTaskClick() {
        toggler(task.id);
    }

    return (
        <div className="task">
            <label >
                <input type="checkbox" checked={task.completed} onChange={handleTaskClick} />
                {task.completed ? <strike>{task.name.toLowerCase()}</strike> : task.name.toUpperCase()}
            </label>
        </div>
    )
}

export default Task
