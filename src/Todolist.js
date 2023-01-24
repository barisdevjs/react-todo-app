import React from 'react'
import Task from './Task'

export default function Todolist({ taskArr, toggler }) {
    return (
        taskArr.map(task => {
            return <Task key={task.id} toggler={toggler} task={task} />
            // key sadece update edilen itemleri update etmek için kullanılır.
        })
    )
}

