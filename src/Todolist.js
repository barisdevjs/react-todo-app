import React from 'react'
import Task from './Task'

export default function Todolist({elementOfArray , toggleTask}) {
    return (
            elementOfArray.map(task => {
                return <Task key={task.id} toggleTask={toggleTask} task={task} /> // key sadece uptade edilen itemleri update etmek için kullanılır.Efficiency purposes
            })
    )
}

